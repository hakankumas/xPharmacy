const express = require("express");
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const homeRoutes = require("./routes/home");
const apiRoutes = require("./routes/api");
const customerRoutes = require("./routes/customer");
const orderRoutes = require("./routes/order");
const drugRoutes = require("./routes/drug");
const supplyRoutes = require("./routes/supply");

app.use(homeRoutes);
app.use("/api", apiRoutes);
app.use("/customer", customerRoutes);
app.use("/order", orderRoutes);
app.use("/drug", drugRoutes);
app.use("/supply", supplyRoutes);

const PORT = 3000;
app.locals.baseURL = `http://localhost:${PORT}`;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
