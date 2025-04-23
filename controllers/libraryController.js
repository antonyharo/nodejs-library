const Library = require("../models/library");

// Listar livros
exports.index = async (req, res) => {
    const books = await Library.getAll();
    res.render("library/index", { books });
};

// Formulário de novo livro
exports.new = (req, res) => {
    res.render("library/new");
};

// Criar novo livro
exports.create = async (req, res) => {
    const { title, price, description } = req.body;
    await Library.create({ title, price, description });
    res.redirect("/library");
};

// Detalhes do livro
exports.show = async (req, res) => {
    const book = await Library.findById(req.params.id);
    if (!book) return res.status(404).send("livro não encontrado");
    res.render("library/show", { book });
};

// Formulário de edição
exports.edit = async (req, res) => {
    const book = await Library.findById(req.params.id);
    if (!book) return res.status(404).send("livro não encontrado");
    res.render("library/edit", { book });
};

// Atualizar livro
exports.update = async (req, res) => {
    const { title, price, description } = req.body;
    await Library.update(req.params.id, { title, price, description });
    res.redirect("/library");
};

// Deletar livro
exports.destroy = async (req, res) => {
    await Library.delete(req.params.id);
    res.redirect("/library");
};