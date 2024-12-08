exports.index = async (req, res) => {
    res.render("./drug/index", {
        title: "İlaçlar | Eczane Karar Destek Sistemleri",
    });
};
