const fnAsync = (url ) => {
    return new Promise((resolve, reject)=>{
        let time = 2000
        const tóf = true;
        (tóf) 
            ?   setTimeout(()=> resolve('resolve  Await'),time) 
            : reject (new Error ('is reject error'))
    })
}

const otherFn = async ( )=>{
    const  something = await fnAsync ();
    console.log(something)
    console.log('hola')
}

console.log('Before')

otherFn ();

console.log('After')