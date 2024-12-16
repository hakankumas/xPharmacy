const Admin = require("../models/Admin");
const Api = require("../models/Api");

exports.login = async (req, res) => {
    const admin = await Admin.get(req.body);
    if (admin[0][0]) res.redirect("/");
    else res.redirect("/login");
};

exports.number_of_sales_process_by_months = async (req, res) => {
    const number_of_sales_process_by_months =
        await Api.number_of_sales_process_by_months();

    res.status(200).json({
        number_of_sales_process_by_months: number_of_sales_process_by_months[0],
    });
};

exports.number_of_sales_revenue_by_months = async (req, res) => {
    const number_of_sales_revenue_by_months =
        await Api.number_of_sales_revenue_by_months();

    res.status(200).json({
        number_of_sales_revenue_by_months: number_of_sales_revenue_by_months[0],
    });
};

exports.number_of_sales_amount_by_months = async (req, res) => {
    const number_of_sales_amount_by_months =
        await Api.number_of_sales_amount_by_months();

    res.status(200).json({
        number_of_sales_amount_by_months: number_of_sales_amount_by_months[0],
    });
};

exports.number_of_orders_placed_from_suppliers = async (req, res) => {
    const number_of_orders_placed_from_suppliers =
        await Api.number_of_orders_placed_from_suppliers();

    res.status(200).json({
        number_of_orders_placed_from_suppliers:
            number_of_orders_placed_from_suppliers[0],
    });
};

exports.number_of_drugs_sold_by_months = async (req, res) => {
    const number_of_drugs_sold_by_months =
        await Api.number_of_drugs_sold_by_months();

    res.status(200).json({
        number_of_drugs_sold_by_months: number_of_drugs_sold_by_months[0],
    });
};

exports.revenue_by_drugs = async (req, res) => {
    const revenue_by_drugs = await Api.revenue_by_drugs();

    res.status(200).json({
        revenue_by_drugs: revenue_by_drugs[0],
    });
};

exports.distribution_of_drugs = async (req, res) => {
    const distribution_of_drugs = await Api.distribution_of_drugs();

    res.status(200).json({
        distribution_of_drugs: distribution_of_drugs[0],
    });
};

exports.distribution_of_customer = async (req, res) => {
    const distribution_of_customer = await Api.distribution_of_customer();

    res.status(200).json({
        distribution_of_customer: distribution_of_customer[0],
    });
};
