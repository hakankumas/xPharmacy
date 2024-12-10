const Customer = require("../models/Customer");
const Drug = require("../models/Drug");
const Supply = require("../models/Supply");

exports.index = async (req, res) => {
    const count_amount_customer = await Customer.count_amount_customer();
    const count_amount_process = await Customer.count_amount_process();
    const count_amount_drug = await Drug.count_amount_drug();
    const count_amount_supply = await Supply.count_amount_supply();
    const count_amount_supply_drug = await Supply.count_amount_supply_drug();
    const count_amount_order = await Supply.count_amount_order();

    res.render("index", {
        title: "Ana Sayfa | Eczane Karar Destek Sistemleri",

        count_amount_customer: count_amount_customer[0],
        count_amount_process: count_amount_process[0],
        count_amount_drug: count_amount_drug[0],
        count_amount_supply: count_amount_supply[0],
        count_amount_supply_drug: count_amount_supply_drug[0],
        count_amount_order: count_amount_order[0],
    });
};

exports.login = async (req, res) => {
    res.render("login", {
        title: "Admin Giriş | Eczane Karar Destek Sistemleri",
    });
};
