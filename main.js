const readline = require('readline');
const Aluno = require('./modules/aluno');
const Turma = require('./modules/turma');
const TurmaPresencial = require('./modules/turmaPresencial');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pergunta = (texto) => {
    return new Promise((resolve) => {
        rl.question(texto, (resposta) => {
            resolve(resposta);
        });
    });
};

(async () => {
    let escolha;
    do {
        escolha = await pergunta('O que você deseja cadastrar? \n1 - Aluno\n2 - Turma \n3 - Turma Presencial \n4- Sair: ');

        switch (escolha) {
            case '1':
                const nome = await pergunta('Informe o nome do aluno: ');
                const login = await pergunta('Informe o login do aluno: ');
                const RA = await pergunta('Informe o RA do aluno: ');

                const aluno1 = new Aluno(nome, login, RA);

                console.log('\nAluno cadastrado:');
                console.log(aluno1);
                break;

            case '2':
                const codigoTurma = await pergunta('Informe o código da turma: ');
                const notaTurma = parseFloat(await pergunta('Informe a nota do aluno na turma: '));

                const turma1 = new Turma(codigoTurma, notaTurma);

                console.log('\nTurma cadastrada:');
                console.log(turma1);
                console.log(`Aprovado na turma? ${turma1.aprovado() ? 'Sim' : 'Não'}`);
                break;

            case '3':
                const codigoTurmaPresencial = await pergunta('Informe o código da turma presencial: ');
                const notaTurmaPresencial = parseFloat(await pergunta('Informe a nota do aluno na turma presencial: '));
                const frequenciaTurmaPresencial = parseFloat(await pergunta('Informe a frequência do aluno na turma presencial (%): '));

                const turmaPresencial1 = new TurmaPresencial(codigoTurmaPresencial, notaTurmaPresencial, frequenciaTurmaPresencial);

                console.log('\nTurma Presencial cadastrada:');
                console.log(turmaPresencial1);
                console.log(`Aprovado na turma presencial? ${turmaPresencial1.aprovado() ? 'Sim' : 'Não'}`);
                break;

            case '4':
                console.log('Saindo...');
                break;

            default:
                console.log('Opção inválida! Escolha 1, 2, 3 ou 4.');
                break;
        }
    } while (escolha !== '4');

    rl.close();
})();
