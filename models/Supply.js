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

    // Tedarikçilerin Satış Bilgileri
    static suppliers_sales_information() {
        return connection.execute(`
            SELECT
                supply_drug.id as supply_drug_id,
                
                supply.id as supply_id,
                supply.name as supply_name,
                
                drug.id as drug_id,
                drug.name as drug_name,
                
                supply_drug.buying_price as drug_buying_price
                
            FROM supply_drug
            INNER JOIN supply ON supply_drug.supply_id = supply.id
            INNER JOIN drug ON supply_drug.drug_id = drug.id
        `);
    }

    // Tedarikçilerin Sipariş Bilgileri
    static order_infos_from_suppliers() {
        return connection.execute(`
            SELECT
				supply_drug_order.id as order_id,
                
                supply_drug.id as supply_drug_id,
                supply.id as supply_id,
                supply.name as supply_name,
                drug.id as drug_id,
                drug.name as drug_name,
                supply_drug.buying_price as drug_buying_price,
                
                supply_drug_order.amount as order_amount,
                supply_drug_order.date as order_date 
                
            FROM supply_drug_order
            INNER JOIN supply_drug ON supply_drug_order.supply_drug_id = supply_drug.id
            INNER JOIN supply ON supply_drug.supply_id = supply.id
            INNER JOIN drug ON supply_drug.drug_id = drug.id
            `);
    }
};
