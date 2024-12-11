const Admin = require("../models/Admin");
const Customer = require("../models/Customer");
const Drug = require("../models/Drug");
const Supply = require("../models/Supply");

exports.login = async (req, res) => {
    const admin = await Admin.get(req.body);
    if (admin[0][0]) res.redirect("/");
    else res.redirect("/login");
};

exports.number_of_sales_process_by_months = async (req, res) => {
    const number_of_sales_process_by_months =
        await Drug.number_of_sales_process_by_months();

    res.status(200).json({
        number_of_sales_process_by_months: number_of_sales_process_by_months[0],
    });
};
