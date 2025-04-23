const express = require("express");
const methodOverride = require("method-override");
const path = require("path");
const app = express();
const libraryRoutes = require("./routes/library");
const db = require("./config/db");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Rotas
app.use("/library", libraryRoutes);

// Permitindo metodos PUT e DELETE no html

// Rota inicial
app.get("/", (req, res) => {
    res.redirect("/library");
});

// Testar conexão com banco e iniciar o servidor
const PORT = 3000;
db.getConnection()
    .then(() => {
        console.log("✅ Conexão com o banco de dados bem-sucedida");
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ Erro ao conectar no banco de dados:", err.message);
        process.exit(1);
    });
