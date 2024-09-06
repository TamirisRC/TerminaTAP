class mysqlPersonModel {
    constructor(db) {
        this.db = db;
    }

    async createPerson(nome, idade, sexo, endereco) {
        await this.db.execute(
            `INSERT INTO Pessoas (nome, idade, sexo, endereco) VALUES (?, ?, ?, ?)`,
            [nome, idade, sexo, endereco]
        );
        return { success: true, message: "Pessoa criada com sucesso" };
    }

    async getPerson(id) {
        const [rows] = await this.db.execute(`SELECT * FROM Pessoas WHERE id = ?`, [id]);
        return rows[0];
    }

    async updatePerson(id, nome, idade, sexo, endereco) {
        const [result] = await this.db.execute(
            `UPDATE Pessoas SET nome = ?, idade = ?, sexo = ?, endereco = ? WHERE id = ?`,
            [nome, idade, sexo, endereco, id]
        );
        return result;
    }

    async deletePerson(id) {
        const [result] = await this.db.execute(`DELETE FROM Pessoas WHERE id = ?`, [id]);
        return result;
    }
}

export default mysqlPersonModel;