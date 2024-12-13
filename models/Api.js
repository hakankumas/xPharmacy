const connection = require("../database/db");

module.exports = class Api {
    // Aylara Göre Satışların İşlem Sayıları
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

    // Aylara Göre Hasılatlar
    static number_of_sales_revenue_by_months() {
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
                ROUND(SUM(drug.sale_price * customer_drug.amount),2) as number
            FROM customer_drug
            INNER JOIN drug ON customer_drug.drug_id = drug.id
            GROUP BY month , year
            ORDER BY year DESC, month_decimal DESC
        `);
    }

    // Aylara Göre Satılan Adet Sayıları
    static number_of_sales_amount_by_months() {
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
                SUM(customer_drug.amount) as number
            FROM customer_drug
            GROUP BY month , year
            ORDER BY year DESC, month_decimal DESC
        `);
    }

    // Tedarikçilerden Verilen Siparişlerin Sayıları
    static number_of_orders_placed_from_suppliers() {
        return connection.execute(`
            SELECT
                supply.id as supply_id,
                supply.name as supply_name,
                COUNT(supply_drug_order.id) as number
            FROM supply_drug_order
            INNER JOIN supply_drug ON supply_drug_order.supply_drug_id = supply_drug.id
            INNER JOIN supply ON supply_drug.supply_id = supply.id
            INNER JOIN drug ON supply_drug.drug_id = drug.id
            GROUP BY supply.id
        `);
    }
};
