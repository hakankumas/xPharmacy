const connection = require("../database/db");

module.exports = class Drug {
    // İlaç Bilgileri
    static get_all() {
        return connection.execute(`
            SELECT
                drug.id as drug_id,
                drug.name as drug_name,
                ROUND(drug.sale_price,2) as drug_sale_price,
                SUM(customer_drug.amount) as drug_total_amount,
                ROUND(SUM(drug.sale_price * customer_drug.amount),2) as drug_total_revenue,
                drug.stock as drug_stock
            FROM drug
            LEFT JOIN customer_drug ON customer_drug.drug_id = drug.id
            GROUP BY drug.id
        `);
    }

    // İlaç Ekle
    static create(condition) {
        const { name, sale_price } = condition;
        return connection.execute(
            `INSERT INTO drug (name, sale_price) VALUES (?,?)`,
            [name, sale_price]
        );
    }

    // İlaç Sil
    static delete(drug_id) {
        return connection.execute(`DELETE FROM drug WHERE id = ${drug_id}`);
    }

    // Beklenen Satışlar İçin Gerekli Stok Adetleri
    static stock_for_next_month() {
        return connection.execute(`
            SELECT
                drug_id,
                drug_name,
                customer_drug_amount,
                rate_amount,
                drug_total_price,
                rate_price,
                excepted_amount,
                excepted_revenue,
                drug_stock,
                drug_stock - excepted_amount as remaining_stock
            FROM (
                SELECT
                    drug.id as drug_id,
                    drug.name as drug_name,
                    SUM(customer_drug.amount) AS customer_drug_amount,
                    ROUND(SUM(customer_drug.amount) / 8, 2) as rate_amount,
                    ROUND(SUM(customer_drug.amount * drug.sale_price),2) AS drug_total_price,
                    ROUND(SUM((customer_drug.amount* drug.sale_price)/ 8 ),2) AS rate_price,
                    ROUND(SUM(customer_drug.amount) / 8,0) as excepted_amount,
                    ROUND(ROUND(SUM(customer_drug.amount) / 8, 0) * drug.sale_price, 2) AS excepted_revenue,
                    drug.stock as drug_stock
                FROM drug
                    INNER JOIN customer_drug ON customer_drug.drug_id = drug.id
                WHERE customer_drug.date >= DATE_SUB(CURDATE(), INTERVAL 8 MONTH)
                GROUP BY drug.id
                ORDER BY YEAR(customer_drug.date) DESC, MONTH(customer_drug.date) DESC

            ) as subquery_table
        `);
    }
};
