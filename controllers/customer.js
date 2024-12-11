const Customer = require("../models/Customer");

exports.index = async (req, res) => {
    const customers_orders = await Customer.customers_orders();
    const customers_number_of_process =
        await Customer.customers_number_of_process();

    res.render("./customer/index", {
        title: "Müşteriler",

        customers_orders: customers_orders[0],
        customers_number_of_process: customers_number_of_process[0],
    });
};
