/* Array Methods
Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers into a list of JavaScript objects.

In the newly returned array, every object must have a val key and the input array's number as a value.

For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].

Minha solução: */

function transformToObjects(numberArray) {
    
    return numberArray.map((transformToObjects) => ({val: transformToObjects}));
    console.log(transformados)
    
}

/*Inside the transformToObjects() function, you should use the map() method to transform all values of the received numberArray parameter (which will be an array of numbers).

Solução do prof:*/

function transformToObj(numberArray) {
    return numberArray.map(item => {
        return {val: item}
    })
}

