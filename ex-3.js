/* 
Crie uma função para exibir números pares de 1 a N.
Quando chamada a função mostra no console números pares
que estejam entre 1 e N, sendo N >=1.
*/

/*
function exibeParesEntre1aN (n){
    let i = 1;

    if (n < 0){
        console.log("Valor inválido");
        return undefined;
    }

    while (i <= n) {
        if (i % 2 ===0){
            console.log(i);
        }
        i = i + 1;
       
    }
}
exibeParesEntre1aN(10);
*/
// SEGUNDA OPÇÃO:

function exibeParesEntre1aN (n){
    let i = 2;

    if (n < 0){
        console.log("Valor inválido");
        return undefined;
    }

    while (i <= n) {
            console.log(i);
            i = i + 2 ;
        }
      
       
    }

exibeParesEntre1aN();