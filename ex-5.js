/*
Crie uma função que quando chamada ela mostra
na tela a string "bla" N vezes, sendo N >=1.
OBS: mostre o texto "blablabla" em apenas
uma única linha.
*/

function geradorDeBla(n){
    let i = 1;
    let bla = ""

    while (i <=n) {
        bla = bla + "bla";
        i++;
    }
    return bla
}

console.log(geradorDeBla(10));