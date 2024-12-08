exports.index = async (req, res) => {
    res.render("index", {
        title: "Ana Sayfa | Eczane Karar Destek Sistemleri",
    });
};

exports.login = async (req, res) => {
    res.render("login", {
        title: "Admin Giriş | Eczane Karar Destek Sistemleri",
    });
};
