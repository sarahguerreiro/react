/* Sintaxe de importação e exportação:
é considerado uma pratica recomendada dividir seu codigo em varios arquivos afim de mante-lo sustentavel e gerenciavel, e é exatamete o que vc faz com a ajuda das palavras-chave de importação e exportação.
*/

/*no exemplo a seguir, temos uma string com uma chave de api x que talvez seja necessaria p enviar solicitações http a um back-end:

let apiKey = 'basd64bajs5hasdb16'

Para que essa chave de api, esse valor dessa string esteja disponivel em outros arquivos, vc precisa exportar essa string, adicionando a palavra-chave export na frente dela: */

export let apiKey = 'basd64bajs5hasdb16'

/*com essa palavra magica, essa variavel fica disponivel e visivel fora deste arquivo*/
