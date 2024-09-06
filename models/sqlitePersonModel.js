class sqlitePersonModel {
  constructor(db) {
      this.db = db;
  }

  async createPerson(nome, idade, sexo, endereco) {
      await this.db.run(
          `INSERT INTO Pessoas (nome, idade, sexo, endereco) VALUES (?, ?, ?, ?)`,
          [nome, idade, sexo, endereco]
      );
      return { success: true, message: "Pessoa criada com sucesso" };
  }

  async getPerson(id) {
      const person = await this.db.get(`SELECT * FROM Pessoas WHERE id = ?`, [id]);
      return person;
  }

  async updatePerson(id, nome, idade, sexo, endereco) {
      return await this.db.run(
          `UPDATE Pessoas SET nome = ?, idade = ?, sexo = ?, endereco = ? WHERE id = ?`,
          [nome, idade, sexo, endereco, id]
      );
  }

  async deletePerson(id) {
      return await this.db.run(`DELETE FROM Pessoas WHERE id = ?`, [id]);
  }
}

export default sqlitePersonModel;