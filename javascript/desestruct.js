const pessoa = {
	nome : 'Evelyn',
	sobrenome: 'Alves',
	idade: 23,
	profissao: 'FullStack Developer',
	endereco: 'Rua sem saida'
};

// console.log(pessoa);

// let nome = pessoa.nome;
// let sobrenomee = pessoa.sobrenome;
// let idade = pessoa.idade;
// let profissao = pessoa.profissao;

let { nome, sobrenome, idade , profissao, endereco } = pessoa;

console.log(nome, sobrenome, idade , profissao, endereco);