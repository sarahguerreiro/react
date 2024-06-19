/*criando objetos para agrupar valores*/
const user = {
    name: "Sarah",
    age: 28,
    greet() {
        console.log("Hello, darling!");
        console.log(this.name)
    }
};

console.log(user.age);
user.greet();

/*ou vc pode criar 'blueprints' com a palavra reservada class*/

class User{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Eii')
    }
}

/*e então instanciar um objeto baseado nesta classe*/

const primeiroUser = new User("Dayanne", 18);
console.log(primeiroUser);