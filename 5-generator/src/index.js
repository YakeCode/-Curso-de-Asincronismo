function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen ();
console.log('primer llamado', g.next().value)
console.log('segundo llamado', g.next().value)
console.log('tercer llamado', g.next().value)

function* iterate (array) {
    for (let value of array){
        yield value
    }
}

const iterable = [2,4,6,8]

const iterar = iterate(iterable)

console.log(iterar.next().value)
console.log(iterar.next().value)
console.log(iterar.next().value)
console.log(iterar.next().value)