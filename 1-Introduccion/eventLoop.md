# Event Loop

* **Memory Heap**: Espacio donde se guardan las variables, funciones y objetos. Estos elementos se almacenan de forma aleatoria.

* **Call Stack**: Pila donde se llaman cada una de las funciones que tenemos que ejecutar en nuestro programa; las apila de forma ordenada (Pila de llamadas).

* **Task Queue**: Es una sala de espera a la que se agregan las tareas que están listas, esperando que las dejen pasar al Call Stack. El Call Stack debe estar vacío para que estas se ejecuten.

* **Web API**: JavaScript del lado del cliente → setTimeout, XML, DOM, archivos del sistema y peticiones HTTPS.

El event loop se encarga de pasar las tareas ya listas del **Task Queue** al **Call Stack**, el cual debe estar vacío.
