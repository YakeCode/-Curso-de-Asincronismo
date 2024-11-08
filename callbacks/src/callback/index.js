//@ts-check

const sum = ( a, b )=>{
    return a + b;
};

const calc = ( a , b, callback )=> {
    return callback (a, b);
};

const rta1 = console.log('el resultado de calc es ', calc(3, 2, sum) )

// Set Timeout

setTimeout(() => {
    console.log('Hola Timeout')
}, 2000);

const gretting = (name)=>{
    return console.log(`Bienvenido ${name}`)
}

setTimeout(gretting, 2000, 'YaKe')