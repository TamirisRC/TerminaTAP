const mongoose = require('mongoose');

const pessoaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    idade: { type: Number, required: true },
    sexo: { type: String, enum: ['M', 'F'], required: true },
    endereco: {
        cep: { type: String },
        logradouro: { type: String },
        bairro: { type: String },
        localidade: { type: String },
        uf: { type: String }
    }
});

const Pessoa = mongoose.model('Pessoa', pessoaSchema);

module.exports = Pessoa;