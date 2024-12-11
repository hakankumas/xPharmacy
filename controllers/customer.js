const Customer = require("../models/Customer");

exports.index = async (req, res) => {
    const customers_detailed_infos = await Customer.customers_detailed_infos();

    res.render("./customer/index", {
        title: "Müşteri Bilgileri",

        customers_detailed_infos: customers_detailed_infos[0],
    });
};
