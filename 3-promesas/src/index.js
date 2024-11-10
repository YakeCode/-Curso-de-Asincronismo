//@ts-check

const promise = new Promise ((resolve, reject)=>{
    resolve('Genial'),
    reject ('Error')
})

const cows = 9

const countCows = new Promise ((resolve, reject)=>{
    if (cows > 10) {
        return resolve ('Puedes suministrar lo necesario')
    } else{
        reject ('Necesitas mas vacas')
    }
})

countCows
.then(result =>console.log(result))
.catch(result=> console.log(result))
.finally(()=>console.log('Finally'))
