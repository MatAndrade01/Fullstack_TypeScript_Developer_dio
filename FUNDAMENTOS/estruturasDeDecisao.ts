// const numero: number = 14;

// if (numero > 15) {
//     console.log("Num maior que 15")
// }else if(numero === 15){
//     console.log("Num igual a 15")
// }else {
//     console.log("Num menor que 15")
// };

const typeUser = {
    admin: "Seja bem vindo admin",
    student: "Você é um estudante",
    viewer: "Você pode visualizar"
}

function valudateUser(user:string){
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = "admin"

valudateUser(usuario);
valudateUser("student");
valudateUser("viewer");