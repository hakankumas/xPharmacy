const Drug = require("../models/Drug");

exports.index = async (req, res) => {
    const list_drug = await Drug.get_all();

    res.render("./drug/index", {
        title: "İlaçlar",

        list_drug: list_drug[0],
    });
};

exports.create_drug = async (req, res) => {
    const drug = await Drug.create(req.body);
    if (drug) res.redirect("/drug");
};

exports.delete_drug = async (req, res) => {
    const drug = await Drug.delete(req.params.id);
    if (drug) res.redirect("/drug");
};
