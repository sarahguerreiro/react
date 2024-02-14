/* Sintaxe de importação e exportação:
é considerado uma pratica recomendada dividir seu codigo em varios arquivos afim de mante-lo sustentavel e gerenciavel, e é exatamete o que vc faz com a ajuda das palavras-chave de importação e exportação.

no exemplo a seguir, temos uma string com uma chave de api x que talvez seja necessaria p enviar solicitações http a um back-end:/*


let apiKey = 'basd64bajs5hasdb16';

Para que essa chave de api, esse valor dessa string esteja disponivel em outros arquivos, vc precisa exportar essa string, adicionando a palavra-chave export na frente dela: */

//export let apiKey = 'basd64bajs5hasdb16';

/*com essa palavra magica, essa variavel fica disponivel e visivel fora deste arquivo
usando o export sem o default, vc pode exportar quantascoisas quiser, ou seja, pode ter mais de um export num mesmo arquivo.

vc pode ainda criar a chamada exportação padrão, adicionando a palavra-chave default apos a palavra reservada export seguido do valor da função/variavel/class/wtv que vc quiser exportar:
*/

export default 'basd64bajs5hasdb16';

/*
ao adicionar a palavra chave default, vc esta dizendo q o valor passado aqui deve ser o padrão exportado por esse arquivo. Se vc optar pela exportação padrão, lembre-se que vc so pode ter uma exportação padrão/arquivo.
*/