# XMLHTTPRequest XHR

Nos permite hacer peticiones a recursos **XML** o **JSON** a través de **eventos**. A su vez, también nos permite que un sitio web actualice solo una parte de la página con datos del servidor, en lugar de tener que cargar completamente la página. Esto también se conoce como **AJAX** (Asynchronous JavaScript and XML).

---

Para utilizarlo en Node se debe instalar la dependencia **xmlhttprequest**.

```bash
npm install xmlhttprequest
```

Este módulo permite hacer solicitudes HTTP a recursos **XML** o **JSON** desde el entorno de node Node, como lo harías en un navegador.

Después de instalar la dependencia **xmlhttprequest**, debemos importar el modulo en el archivo JS donde lo vamos a utilizar.

- require ('xmlhttprequest')

```Javascript
    const XMLHttpRequest = require('xmlhttprequest')
```

## Métodos

**XMLHttpRequest.open() :** Inicia una solicitud

**XMLHttpRequest.onreadystatechange :** Lo usa mos para saber en que punto esta la petición, especialmente para saber cuándo la respuesta está lista para que podamos trabajar con los datos del servidor.

**redystate :** Es una propiedad que nos muestra en que punto se encuentra una petición al servidor, devolviéndolos 5 posibles números

- 0: No se ha comenzado la petición.
- 1: La conexión con el servidor se ha iniciado.
- 2: La petición ha sido recibida por el servidor.
- 3: El servidor está enviando la respuesta.
- 4: La respuesta está completa y lista para usar.

Usamos readyState para saber cuándo la respuesta del servidor está lista en el estado **4**, que es el momento adecuado para procesar los datos sin errores.

**XMLHttpRequest.status :** Este nos indica un código de estado de la solicitud Http

- Respuestas informativas (100–199),
- Respuestas satisfactorias (200–299),
- Redirecciones (300–399),
- Errores de los clientes (400–499),
- Errores de los servidores (500–599).

[Documentación de códigos](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

**XMLHttpRequest.responseText :** Es una propiedad en JavaScript que contiene el texto de la respuesta que envía el servidor cuando hacemos una petición.

**XMLHttpRequest.responseText() :** Se utiliza para enviar los datos al servidor desde el cliente y permite enviar peticiones asíncronas
