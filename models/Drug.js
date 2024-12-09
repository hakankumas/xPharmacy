const connection = require("../database/db");

module.exports = class Drug {
    // İlaç Bilgileri
    static get_all() {
        return connection.execute(`
            SELECT 
                drug.id as drug_id,
                drug.name as drug_name
            FROM drug`);
    }

    // İlaç Sayısı
    static count_amount() {
        return connection.execute(`
            SELECT COUNT(drug.id) as number
            FROM drug
        `);
    }

    // Aylara Göre Satılan İlaç Sayısı
    static number_of_drugs_sold_by_months() {
        return connection.execute(`
            SELECT 
                YEAR(customer_drug.date) AS year,
                MONTHNAME(customer_drug.date) AS month,
                MONTH(customer_drug.date) AS month_decimal,
                CONCAT(
                    YEAR(customer_drug.date), ' ', MONTHNAME(customer_drug.date)
                ) AS fulldate,
                COUNT(customer_drug.id) as number
            FROM customer_drug
            GROUP BY month , year
            ORDER BY year DESC, month_decimal DESC
        `);
    }
};
