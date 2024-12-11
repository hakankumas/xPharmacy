const connection = require("../database/db");

module.exports = class Drug {
    // İlaç Bilgileri
    static get_all() {
        return connection.execute(`
            SELECT 
                drug.id as drug_id,
                drug.name as drug_name,
                CONCAT(ROUND(drug.sale_price,2),' TL') as drug_sale_price
            FROM drug`);
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

    // İlaç Sayısı
    static count_amount_drug() {
        return connection.execute(`
            SELECT COUNT(drug.id) as number
            FROM drug
        `);
    }

    // Aylara Göre Satışların İşlem Sayısı
    static number_of_sales_process_by_months() {
        return connection.execute(`
            SELECT 
                YEAR(customer_drug.date) AS year,
                MONTHNAME(customer_drug.date) AS month,
                MONTH(customer_drug.date) AS month_decimal,
                CONCAT(
                    YEAR(customer_drug.date), ' ', 
                    CASE MONTH(customer_drug.date)
                        WHEN 1 THEN 'Ocak'
                        WHEN 2 THEN 'Şubat'
                        WHEN 3 THEN 'Mart'
                        WHEN 4 THEN 'Nisan'
                        WHEN 5 THEN 'Mayıs'
                        WHEN 6 THEN 'Haziran'
                        WHEN 7 THEN 'Temmuz'
                        WHEN 8 THEN 'Ağustos'
                        WHEN 9 THEN 'Eylül'
                        WHEN 10 THEN 'Ekim'
                        WHEN 11 THEN 'Kasım'
                        WHEN 12 THEN 'Aralık'
                    END
                ) AS fulldate,
                COUNT(customer_drug.id) as number
            FROM customer_drug
            GROUP BY month , year
            ORDER BY year DESC, month_decimal DESC
        `);
    }

    // Aylara Göre Toplam Hasılatlar
    // static number_of_total_revenue_by_months() {
    //     return connection.execute(`

    //     `);
    // }

    // Aylara Göre Satılan İlaç Adet Sayıları
    // static number_of_sold_drugs_by_months() {
    //     return connection.execute(`

    //     `);
    // }
};
