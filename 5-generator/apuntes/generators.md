# función\* Generator

**function\* :** Crea una función generadora que puede pausarse en yield y reanudarse en next().

### Cómo funciona :

Cada vez que llamas **next()**, la función ejecuta el siguiente yield, devolviendo un objeto { value, done }.
" done es true cuando la función ha terminado".

### Características clave :

**Delegación :** Usa yield\* para llamar a otra función generadora.
**Return :** Detiene la función y devuelve un valor final.
**Pasar datos :** Puedes enviar valores a la función mediante next(valor).
**Limitación :** No tiene versión en arrow functions y no funciona como constructor (new).

**Se utiliza comúnmente para evitar el callback hell con las promesas.**

```Javascript
// Simulación de tres tareas asincrónicas
function tarea1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tarea 1 completada");
      resolve();
    }, 1000);
  });
}

function tarea2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tarea 2 completada");
      resolve();
    }, 1000);
  });
}

function tarea3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tarea 3 completada");
      resolve();
    }, 1000);
  });
}

// Función generadora que controla el orden de ejecución
function* ejecutarTareasEnOrden() {
  yield tarea1();
  yield tarea2();
  yield tarea3();
}

// Ejecuta cada tarea en secuencia
function ejecutarGenerador(generador) {
  const iterador = generador();

  function siguiente(promise) {
    // Llama al siguiente paso en el generador y obtiene un objeto con 'value' y 'done'
    const { value, done } = iterador.next(promise);

    // Si el generador aún no ha terminado, es decir, 'done' es falso
    if (!done) {
      // 'value' contiene la promesa de la tarea actual (por ejemplo, tarea1)
      // Se espera a que la promesa se resuelva y luego se llama a 'siguiente' nuevamente
      value.then(siguiente);
    }
    // Si 'done' es true, significa que el generador terminó y no hay más tareas
    // En ese caso, simplemente no se ejecuta nada más.
  }

  // Inicia la ejecución del generador llamando al primer 'siguiente'
  siguiente();
}

// Inicia la ejecución de las tareas en orden sin Callback Hell
ejecutarGenerador(ejecutarTareasEnOrden);
```
