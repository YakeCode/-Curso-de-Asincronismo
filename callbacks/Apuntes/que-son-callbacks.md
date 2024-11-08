# ¿Que Son Los Callbacks?

En JavaScript, los callbacks funcionan igual. Le decimos al código que ejecute ciertas tareas "después", cuando haya terminado algo importante, como una consulta a la base de datos o cargar una imagen. Mientras tanto, el programa sigue haciendo otras cosas, sin detenerse. Cuando llega el momento adecuado, el callback se activa y se ejecuta, haciendo lo que le habíamos pedido.

Ejemplo de Código.

```Javascript

const sum = ( a, b )=>{
    return a + b;
};

const calc = ( a , b, callback )=> {
    return callback (a, b);
};

const rta1 = console.log('el resultado de calc es ', calc(3, 2, sum) )

```

# Set-Timeout

Con **SetTimeout** le dices al código que ejecute una acción después de cierto tiempo (por ejemplo, 2 segundos), y el programa sigue haciendo otras cosas hasta que ese tiempo pasa y se activa la acción que habías programado.

Cada 1000 es un segundo.

**SetTimout :** Es tambien un callback, pues esta recibe también sea una función anónima u otra función.

```Javascript

    const sintaxis = setTimeout(funcion, tiempo, parametro1, parametro2, ...); /* Syntax */

    setTimeout(() => {
        console.log('Hola Timeout')
    }, 2000);// 2 segundos

 // Después de 2  segundo correría la función
```
