const Count = require("../models/Count");

exports.index = async (req, res) => {
    const count_amount_customer = await Count.count_amount_customer();
    const count_amount_process = await Count.count_amount_process();
    const count_amount_drug = await Count.count_amount_drug();
    const count_amount_supply = await Count.count_amount_supply();
    const count_amount_supply_drug = await Count.count_amount_supply_drug();
    const count_amount_order = await Count.count_amount_order();

    const sum_total_revenue = await Count.sum_total_revenue();
    const sum_total_amount = await Count.sum_total_amount();

    res.render("index", {
        title: "Ana Sayfa",

        count_amount_customer: count_amount_customer[0],
        count_amount_process: count_amount_process[0],
        count_amount_drug: count_amount_drug[0],
        count_amount_supply: count_amount_supply[0],
        count_amount_supply_drug: count_amount_supply_drug[0],
        count_amount_order: count_amount_order[0],

        sum_total_revenue: sum_total_revenue[0],
        sum_total_amount: sum_total_amount[0],
    });
};

exports.login = async (req, res) => {
    res.render("login", {
        title: "Admin Giriş",
    });
};
