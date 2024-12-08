exports.index = async (req, res) => {
    res.render("index", {
        title: "Ana Sayfa | Eczane KDS",
    });
};

exports.login = async (req, res) => {
    res.render("login", {
        title: "Admin Giriş | Eczane KDS",
    });
};
