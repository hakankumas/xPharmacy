const Drug = require("../models/Drug");
const Supply = require("../models/Supply");

exports.index = async (req, res) => {
    const list_supply = await Supply.get_all();
    const list_drug = await Drug.get_all();
    const suppliers_sales_information =
        await Supply.suppliers_sales_information();
    const order_infos_for_supplied_drugs =
        await Supply.order_infos_for_supplied_drugs();

    res.render("./supply/index", {
        title: "Tedarikçiler",

        list_supply: list_supply[0],
        list_drug: list_drug[0],
        suppliers_sales_information: suppliers_sales_information[0],
        order_infos_for_supplied_drugs: order_infos_for_supplied_drugs[0],
    });
};

exports.create = async (req, res) => {
    const supply = await Supply.create(req.body.supply_name);
    if (supply) res.redirect("/supply");
};

exports.delete = async (req, res) => {
    const supply = await Supply.delete(req.params.id);
    if (supply) res.redirect("/supply");
};

exports.supply_drug_create = async (req, res) => {
    const supply_drug = await Supply.supply_drug_create(req.body);
    if (supply_drug) res.redirect("/supply");
};

exports.supply_drug_delete = async (req, res) => {
    const supply_drug = await Supply.supply_drug_delete(req.params.id);
    if (supply_drug) res.redirect("/supply");
};

exports.order_create = async (req, res) => {
    const order = await Supply.order_create(req.body);
    if (order) res.redirect("/supply");
};

exports.order_delete = async (req, res) => {
    const order = await Supply.order_delete(req.params.id);
    if (order) res.redirect("/supply");
};
