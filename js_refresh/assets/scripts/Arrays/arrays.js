/*const hobbies = ["cerâmica", "desenho", "canto", "patins", "dança", "pintura"];

console.log(hobbies[0]);

hobbies.push("colecionismo");
console.log(hobbies);

const index = hobbies.findIndex((item) => {
    return item === "dança";
});

console.log(index)*/

let meusHobbies = ["leitura", "maquiagem", "cultura cannabica"];
console.log(meusHobbies);

meusHobbies.push("ballet");
console.log(meusHobbies);

/*por padrão o metodo findIndex retorna o valor -1 quando o item nao é encontrado*/
const posicao = meusHobbies.findIndex((item) =>{
    return item === "luta"
})

/*entao se vc compara o valor atual de posicao com o valor gerado pelo metodo(-1) ao nao encontrar o item passado, é possível printar uma msg de valor nao encontrado ao inves de so o -1 */
if (posicao === -1) {
    console.log("item nao encontrado");
} else {
    console.log(posicao)
}
console.log(posicao)
/* metodos como o map e o findIndex usam uma funçao como paramentro e passam para esta funçao os itens do array como parametro da função, comparando o item em cada posição do array */
const editedHobbies = meusHobbies.map((item) => item + "!");
/* o map permite que vc transforme cada item do array em outro item, sem modificar o array original, mas criando um novo rray com as alterações*/
console.log(editedHobbies);

/*vale ressaltar q com o map é possivel transformar cada item em qualquer outro tipo de item. Por ex, alem de converter strings em novas strings, tbm podemos converter as strings em objetos. Para isso, a seta da arrow function dentro de map, vai apontar para chaves de abertura e fechamento envolvidas por parenteses. Dentro das chaves, vc define o que quer que seja a key o que quer que seja o valor:*/
const objHobbies = meusHobbies.map((item) => ({text: item}));
/*na linha codigo acima, um novo array cheio de objetos javascript será criado em q cada objeto tem uma key 'text', cujos valores são os itens do array antigo */

console.log(objHobbies);