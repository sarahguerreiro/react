/*Uma vez que vc tem o arquivo desejado com a palavra-chave export na frente, é possível visualizar este arquivo a partir de outro arquivo, adicionando ao arquivo que chama a palavra-chave import, seguindo esse padrão: 

import {apiKey} from "./main.js"

console.log(apiKey)
*/

/*mas se a sua escolha de sintaxe de importação for a padrão, vc não precisa usar o nome entre chaves e tbm nao precisa dar o mesmo nome qe a coisa a ser exporta, ate pq se vc reparar bem, na exportação padrao vc não indica o que vai ser exportado pelo nome, e sim pelo valor, mas vc deve colocar um nome. Apesar dessa possibilidade, obviamente é indicado que vc atribua aqui o mesmo nome daquilo que vc quer exportar e tbm o caminho deste arquivo: */

// import apiKey from "./main.js"

// console.log(apiKey)


/*
essa maneira de importar é especialmente util quando o que vc tem a importar é apenas uma variavel/uma função, um unico valor no arquivo para o qual deseja exportar
*/