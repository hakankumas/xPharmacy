const Customer = require("../models/Customer");

exports.index = async (req, res) => {
    const customers_order_history = await Customer.customers_order_history();

    res.render("./order/index", {
        title: "Sipariş Geçmişi",

        customers_order_history: customers_order_history[0],
    });
};
