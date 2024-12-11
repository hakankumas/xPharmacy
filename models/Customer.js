const connection = require("../database/db");

module.exports = class Customer {
    // Müşteri Bilgileri
    static get_all() {
        return connection.execute(`
            SELECT 
                customer.id as customer_id,
                customer.name as customer_name,
                customer.surname as customer_surname,
                customer.gender_id as gender_id,
                gender.name as gender_name
            FROM customer
            INNER JOIN gender ON customer.gender_id = gender.id
        `);
    }

    // Müşteri Sayısı
    static count_amount_customer() {
        return connection.execute(`
            SELECT COUNT(customer.id) as number
            FROM customer
        `);
    }

    // İşlem Sayısı
    static count_amount_process() {
        return connection.execute(`
            SELECT COUNT(customer_drug.id) as number
            FROM customer_drug
        `);
    }

    // Müşterilerin Siparişleri
    static customers_orders() {
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
                CONCAT(ROUND(drug.sale_price,2),' TL') as drug_sale_price,
                customer_drug.amount as customer_drug_amount,
                CONCAT(ROUND(drug.sale_price * customer_drug.amount,2),' TL') as drug_total_price,
                customer_drug.date as customer_drug_date
            FROM customer_drug
            INNER JOIN customer ON customer_drug.customer_id = customer.id
            INNER JOIN drug ON customer_drug.drug_id = drug.id
            INNER JOIN gender ON customer.gender_id = gender.id
        `);
    }

    // Müşteri Bilgileri + İşlem Sayısı
    static customers_number_of_process() {
        return connection.execute(`
            SELECT
                customer.id as customer_id,
                customer.name as customer_name,
                customer.surname as customer_surname,
                customer.gender_id as gender_id,
                gender.name as gender_name,
                
                COUNT(customer_drug.customer_id) as number
            
            FROM customer
            INNER JOIN customer_drug ON customer_drug.customer_id = customer.id
            INNER JOIN gender ON customer.gender_id = gender.id
            GROUP BY customer.id
            ORDER BY number DESC
        `);
    }
};
