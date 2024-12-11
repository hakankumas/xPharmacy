exports.index = async (req, res) => {
    res.render("./drug/index", {
        title: "İlaçlar",
    });
};
