const connection = require("../database/db");

module.exports = class Home {
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

    // İlaç Sayısı
    static count_amount_drug() {
        return connection.execute(`
            SELECT COUNT(drug.id) as number
            FROM drug
        `);
    }

    // Tedarikçi Sayısı
    static count_amount_supply() {
        return connection.execute(`
            SELECT COUNT(supply.id) as number
            FROM supply
        `);
    }

    // Tedarik Edilebilir İlaç Sayısı
    static count_amount_supply_drug() {
        return connection.execute(`
            SELECT COUNT(supply_drug.id) as number
            FROM supply_drug
        `);
    }

    // Sipariş Sayısı
    static count_amount_order() {
        return connection.execute(`
            SELECT COUNT(supply_drug_order.id) as number
            FROM supply_drug_order
        `);
    }

    // Toplam Hasılat
    static sum_total_revenue() {
        return connection.execute(`
            SELECT 
                ROUND(SUM(drug.sale_price * customer_drug.amount),2) as number
            FROM customer_drug
            INNER JOIN drug ON customer_drug.drug_id = drug.id
        `);
    }

    // Toplam Satılan İlaç Adedi
    static sum_total_amount() {
        return connection.execute(`
            SELECT 
                SUM(customer_drug.amount) as number
            FROM customer_drug
        `);
    }
};
