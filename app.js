require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const userRoutes = require("./routes/users");
const db = require("./config/db");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Rotas
app.use("/users", userRoutes);

// Rota inicial
app.get("/", (req, res) => {
    res.redirect("/users");
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
