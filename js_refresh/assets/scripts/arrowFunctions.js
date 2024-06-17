/* ------------uma funcao normal--------------

function createGreeting(userName, message = "wooow") {
    return "Hi, i am " + userName + " " + message
}

const greeting1 = createGreeting('Maria');

console.log(greeting1)

const greeting2 = createGreeting('Sarah', 'maria vai fundo com o boy!')

console.log(greeting2)
*/

// Outra abordagem, mt utilizada em caso de funções anonimas, é a arrow function:

export default (userName, message) => {

    console.log('olaa')
    return userName + message
    
}


