const connection = require("../database/db");

module.exports = class Customer {
    // Müşteri Bilgileri + Toplam İşlem Ücreti + Toplam İşlem Sayısı + Toplam Satın Alınan İlaç Adedi
    static customers_detailed_infos() {
        return connection.execute(`
            SELECT
                customer.id as customer_id,
                customer.name as customer_name,
                customer.surname as customer_surname,
                customer.gender_id as gender_id,
                gender.name as gender_name,
                ROUND(SUM(drug.sale_price * customer_drug.amount),2) as total_revenue,
                COUNT(customer_drug.customer_id) as total_process,
                SUM(customer_drug.amount) as total_amount
            FROM customer_drug
            INNER JOIN customer ON customer_drug.customer_id = customer.id
            INNER JOIN drug ON customer_drug.drug_id = drug.id
            INNER JOIN gender ON customer.gender_id = gender.id
            GROUP BY customer.id  
            ORDER BY total_revenue DESC
        `);
    }

    // Müşterilerin Sipariş Geçmişi
    static customers_order_history() {
        return connection.execute(`
            SELECT
                customer_drug.id as customer_drug_id,
                customer.id as customer_id,
                customer.name as customer_name,
                customer.surname as customer_surname,
                customer.gender_id as gender_id,
                gender.name as gender_name,
                drug.id as drug_id,
                drug.name as drug_name,
                ROUND(drug.sale_price,2) as drug_sale_price,
                customer_drug.amount as customer_drug_amount,
                ROUND(drug.sale_price * customer_drug.amount,2) as drug_total_price,
                customer_drug.date as customer_drug_date
            FROM customer_drug
            INNER JOIN customer ON customer_drug.customer_id = customer.id
            INNER JOIN drug ON customer_drug.drug_id = drug.id
            INNER JOIN gender ON customer.gender_id = gender.id
        `);
    }
};
