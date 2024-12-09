const connection = require("../database/db");

module.exports = class Drug {
    // İlaç Bilgileri
    static getAll() {
        return connection.execute(`
            SELECT 
                drug.id as drug_id,
                drug.name as drug_name
            FROM drug`);
    }
};
