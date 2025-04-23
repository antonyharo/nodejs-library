const User = require("../models/user");

// Listar usuários
exports.index = async (req, res) => {
    const users = await User.getAll();
    res.render("users/index", { users });
};

// Formulário de novo usuário
exports.new = (req, res) => {
    res.render("users/new");
};

// Criar novo usuário
exports.create = async (req, res) => {
    const { name, email } = req.body;
    await User.create({ name, email });
    res.redirect("/users");
};

// Detalhes do usuário
exports.show = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("Usuário não encontrado");
    res.render("users/show", { user });
};

// Formulário de edição
exports.edit = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("Usuário não encontrado");
    res.render("users/edit", { user });
};

// Atualizar usuário
exports.update = async (req, res) => {
    const { name, email } = req.body;
    await User.update(req.params.id, { name, email });
    res.redirect("/users");
};

// Deletar usuário
exports.destroy = async (req, res) => {
    await User.delete(req.params.id);
    res.redirect("/users");
};
