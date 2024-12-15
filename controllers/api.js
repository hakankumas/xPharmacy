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
