/* Quando temos um array como no ex abaixo, é possível guardar em novas variaveis apenas o dado que vc precisa daquele array a partir de seu indice OU vc pode usar o recurso da desestruturação: onde é colocado colchetes do lado esquerdo do sinal de igualdade e o q estiver dentro deles será definido como novas variaveis, que podem ser separadas por virgula; */

const userNameData = ["Sarah", "Guerreiro"];
/*o conteudo da 1a variavel sera o 1o valor da string original: */
const [firstName, lastName] = ["Sarah", "Guerreiro"];
console.log(firstName);

/* tbm é possivel desestruturar objetos adicionando chaves ao lado esquerdo do sinal de igualdade, porem quando se trata de objetos, os nomes escolhidos para as variaveis precisam ser necessariamente os mesmos nomes das chaves dos objetos. assim: */

const user = {
    name: "Everton",
    age: 32
};

/* desestruturando */

const {name, age} = {
    name: "everton",
    age: 32
}
console.log(name)

/*mas caso seja mt importante dar outro nome que nao os das chaves para as novas variaveis, é possivel dar um alias name a elas, adicionando dois pontos ao lado do nome da chave, seguido do nome q vc quer dar a esta variavel:  */

const {name: userName, age} = {
    name: "evertonn",
    age: 32
};
console.log(userName)