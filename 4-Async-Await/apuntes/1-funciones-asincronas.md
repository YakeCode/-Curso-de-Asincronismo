# Funciones Asíncronas ASYNC AWAIT

Es una herramienta para manejar operaciones asíncronas deforma mas fácil y legible.

**async :** Se pone antes de una función para indicarle a js que ahi adentro se hará algo que toma tiempo.

**await :** Solo se puede usar dentro de una función async. _Await_ le dice a JS "Espera aquí hasta que termine". por lo tanto el resto del código se estará ejecutando hasta que esta función sse complete y genere su retorno, esta función no es bloqueante.

```Javascript
async function getUserData() {
  const response = await fetch('https://api.example.com/user'); // Espera a que fetch termine
  const data = await response.json(); // Espera a que convierta a JSON
  console.log(data); // Usa los datos una vez que están listos
}

getUserData();
```
