const db = require("../config/db");

module.exports = {
    getAll: async () => {
        const [rows] = await db.query("SELECT * FROM books");
        return rows;
    },

    findById: async (id) => {
        const [rows] = await db.query("SELECT * FROM books WHERE id = ?", [id]);
        return rows[0];
    },

    create: async (data) => {
        const { title, price, description } = data;
        const [result] = await db.query(
            "INSERT INTO books (title, price, description) VALUES (?, ?, ?)",
            [title, price, description]
        );
        return { id: result.insertId, title, price };
    },

    update: async (id, data) => {
        const { title, price, description } = data;
        await db.query(
            "UPDATE books SET title = ?, price = ?, description = ? WHERE id = ?",
            [title, price, description, id]
        );
    },

    delete: async (id) => {
        await db.query("DELETE FROM books WHERE id = ?", [id]);
    },
};
