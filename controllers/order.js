const Customer = require("../models/Customer");
const Drug = require("../models/Drug");

exports.index = async (req, res) => {
    const customers_order_history = await Customer.customers_order_history();
    const stock_for_next_month = await Drug.stock_for_next_month();

    res.render("./order/index", {
        title: "Sipariş Geçmişi",

        customers_order_history: customers_order_history[0],
        stock_for_next_month: stock_for_next_month[0],
    });
};
