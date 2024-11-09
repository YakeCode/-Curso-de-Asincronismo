# Que es el asincronismo? 

- Los lenguajes de programacion son sincronos : ejecutan una tarea a la vez *JS* tambien comparte esto y tiene un solo sub proceso (un solo hilo).

- Bloqueante : Una tarea no devuelve el control hasta que se ha completado una tarea -> alert en js no deja continuar la operacion hata que no se termine de ejecutar, por lo tanto estara bloqueada.

- No Bloqueante : es la ejecucion comun de una tarea cin bloqueo, si se ejecuita de la forma que esperamos devuelve la Data y si no debuelve un error.

- Sincrono : Se debe esperar a que una tarea se complete para poder esperar que se genee la siguienete tarea.

- Asincrono : Significa que las tareas pueden realizarse luego sin necesidad de bloquear la ejecucion de la aplicacion. 

- Concurrencia : Es un modelo que utiliza un loop de eventos *eventloop*

- EventLoop : Es un bucle de eventos que espera y distribuye eventos o mensajes en un programa.

Para entender el event loop, imagina que tienes una lista de tareas. Primero haces las más rápidas, y cuando una tarea tarda en completarse (como esperar la pizza), sigues con otras cosas mientras esperas. Cuando la pizza llega, te avisan y puedes atenderla sin retrasar las otras tareas.

# DENTRO DE JS

* Callbacks : Una función que se ejecuta cuando otra termina una tarea. Es como dejar una nota en un trabajo: "Cuando termines, llama a esta función". Así, JavaScript sabe que debe hacer algo específico una vez que la tarea principal ha concluido.

* Promesas : Funcion no bloqueante y asincrona la cual puede retornar un valor en cuaquier momento o incluso no retornarlos porque fallo algo *ES6*

* Async Await : Permite estructurar funciones asincronas sin bloqueo
