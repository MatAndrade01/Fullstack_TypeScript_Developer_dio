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
    profissao: "Desenvolvedor"
};

const arryPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
];

const arryNum: number[] = [
    1, 2, 3
];

const arryString: Array<string> = [
    "1", "2", "3"
];