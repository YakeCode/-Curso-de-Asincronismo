# Que son las promesas

Una promesa es un valor que podría llegar a existir o no.

```Javascript
    new Promise (ejecutor, (resolver, rechazar)=>{...})

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
.then(result =>console.log(result)) /*devuelve lo que captura la función si es resolve*/
.catch(result=> console.log(result)) /*devuelve lo que captura la función si es reject*/
.finally(()=>console.log('Finally'))
```
