const Turma = require('./turma');
module.exports = class Presencial extends Turma {
    constructor(codigo, nota,frequencia) {
        super(codigo, nota);
        this.frequencia = frequencia;
    }
    aprovado() {
        return this.nota >= 6.5 && this.frequencia >= 75 || this.frequencia >= 50 && this.nota >= 8.0;
    }
}
