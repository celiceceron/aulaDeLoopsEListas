/* 
Crie uma função para exibir números de 1 a N.
Quando chamada a função mostra no console números de 1 a N,
sendo N um parâmetro da função e N >=1.
*/

function exibeNumerosDe1aN (n){
    let i = 1;

    if (n < 0){
        console.log("Valor inválido");
        return undefined;
    }

    while (i <= n) {
        console.log(i);
        i = i + 1;
       
    }
}
exibeNumerosDe1aN(-1);