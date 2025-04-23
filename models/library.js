const db = require("../config/db");

module.exports = {
    getAll: async () => {
        const [rows] = await db.query("SELECT * FROM users");
        return rows;
    },

    findById: async (id) => {
        const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
        return rows[0];
    },

    create: async (data) => {
        const { name, email } = data;
        const [result] = await db.query(
            "INSERT INTO users (name, email) VALUES (?, ?)",
            [name, email]
        );
        return { id: result.insertId, name, email };
    },

    update: async (id, data) => {
        const { name, email } = data;
        await db.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [
            name,
            email,
            id,
        ]);
    },

    delete: async (id) => {
        await db.query("DELETE FROM users WHERE id = ?", [id]);
    },
};
