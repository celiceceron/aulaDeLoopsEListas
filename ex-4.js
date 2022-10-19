/* 
Crie uma função para exibir N números pares em ordem 
crescente a partir de 2.
Quando chamada a função mostra no console N numeros pares em 
ordem crescente a partir de 2, sendo N >= 1.
*/

/*
function exibeNPares(n){
    let i = 1;  // CONTADOR DE 1 A 10;
    let numeroPar = 2; // VARIÁVEL QUE VAI MOSTRANDO OS PARES N VEZES;


    if (n < 0){
        console.log("Valor inválido");
        return undefined;
    }

    while (i <= n) {
            console.log(numeroPar);
            numeroPar += 2;
            i++;
        }
    }

exibeNPares(10);
*/
// SEGUNDA OPÇÃO:

function exibeNPares(n){
    let i = 1; // CONTADOR DE 1 A 10;

    if (n < 0){
        console.log("Valor inválido");
        return undefined;
    }

    while (i <= n) {
            console.log(i*2);
            i++;
        } 
    }

    exibeNPares(10);
