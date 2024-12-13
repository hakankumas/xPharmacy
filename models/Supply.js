const connection = require("../database/db");

module.exports = class Supply {
    // Tedarikçi Bilgileri
    static get_all() {
        return connection.execute(`
            SELECT 
                supply.id as supply_id,
                supply.name as supply_name
            FROM supply
        `);
    }

    // Tedarikçi Ekle
    static create(supply_name) {
        return connection.execute(`INSERT INTO supply (name) VALUES (?)`, [
            supply_name,
        ]);
    }

    // Tedarikçi Sil
    static delete(supply_id) {
        return connection.execute(`DELETE FROM supply WHERE id = ${supply_id}`);
    }

    // Tedarikçi İlaç Ekle
    static supply_drug_create(condition) {
        const { supply_id, drug_id, buying_price } = condition;
        return connection.execute(
            `INSERT INTO supply_drug (supply_id, drug_id, buying_price) VALUES (?,?,?)`,
            [supply_id, drug_id, buying_price]
        );
    }

    // Tedarikçi İlaç Sil
    static supply_drug_delete(supply_drug_id) {
        return connection.execute(
            `DELETE FROM supply_drug WHERE id = ${supply_drug_id}`
        );
    }

    // Tedarikçi İlaç Sipariş Ekle
    static order_create(condition) {
        const { supply_drug_id, amount } = condition;
        return connection.execute(
            `INSERT INTO supply_drug_order (supply_drug_id, amount) VALUES (?,?)`,
            [supply_drug_id, amount]
        );
    }

    // Tedarikçi İlaç Sipariş Sil
    static order_delete(order_id) {
        return connection.execute(
            `DELETE FROM supply_drug_order WHERE id = ${order_id}`
        );
    }

    // Tedarikçilerin Satış Bilgileri
    static suppliers_sales_information() {
        return connection.execute(`
            SELECT
                supply_drug.id as supply_drug_id,
                
                supply.id as supply_id,
                supply.name as supply_name,
                
                drug.id as drug_id,
                drug.name as drug_name,
                
                ROUND(supply_drug.buying_price,2) as drug_buying_price
                
            FROM supply_drug
            INNER JOIN supply ON supply_drug.supply_id = supply.id
            INNER JOIN drug ON supply_drug.drug_id = drug.id
        `);
    }

    // Tedarik Edilen İlaçların Sipariş Bilgileri
    static order_infos_for_supplied_drugs() {
        return connection.execute(`
            SELECT
				supply_drug_order.id as order_id,
                
                supply_drug.id as supply_drug_id,
                supply.id as supply_id,
                supply.name as supply_name,
                drug.id as drug_id,
                drug.name as drug_name,
                ROUND(supply_drug.buying_price,2) as drug_buying_price,
                
                supply_drug_order.amount as order_amount,
                ROUND(supply_drug_order.amount * supply_drug.buying_price,2) as order_total_price,
                supply_drug_order.date as order_date
                
            FROM supply_drug_order
            INNER JOIN supply_drug ON supply_drug_order.supply_drug_id = supply_drug.id
            INNER JOIN supply ON supply_drug.supply_id = supply.id
            INNER JOIN drug ON supply_drug.drug_id = drug.id
            `);
    }
};
