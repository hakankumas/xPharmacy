exports.index = async (req, res) => {
    res.render("./customer/index", {
        title: "Müşteriler | Eczane Karar Destek Sistemleri",
    });
};
