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
                ROUND(SUM(drug.sale_price * customer_drug.amount),2) as drug_total_revenue
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
};
