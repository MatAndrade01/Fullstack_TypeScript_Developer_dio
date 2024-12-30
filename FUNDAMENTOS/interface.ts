interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string
};

const pessoa: Pessoa = {
    nome: "Matheus",
    idade: 22,
};

const outraPessoa: Pessoa = {
    nome: "Lucas", 
    idade: 25,
    profissao: "Dev"
};

const arryPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
];

