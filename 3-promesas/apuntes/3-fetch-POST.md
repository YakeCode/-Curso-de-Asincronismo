# Fetch POST

Lo utilizamos para hacer un post a una API O guardar datos.

## Métodos fetch :

- 'Get': Para obtener

- 'Post': Enviar

- 'Put': Actualizar

- 'Delete' Para eliminar.

Para usarlo hay que tener en cuenta

- Adónde enviar los datos: con la URL del servidor o servicio web.
- Qué tipo de datos enviar: especificando el método POST.
- Cuáles datos enviar: los datos en sí, como el nombre de un usuario, un comentario, o cualquier información que quieras enviar al servidor.
- Cómo enviarlos: configurando detalles como el formato (por ejemplo, JSON) para que el servidor entienda la información correctamente.

## Parametros de fetch

```Javascript
    fetch(url, options)
```

### Ejemplo

```Javascript
const API = 'https://api.escuelajs.co/api/v1/products/'

const postData = (urlApi, data) => {
    const response = fetch(urlApi,{ /*Hacia donde va */
        method: 'POST',/*Método que se va a utilizar */
        mode: 'cors', /*Tipo de acceso permitido */
        credentials: 'same-origin',
        headers: {
            'Content-Type':'application/json' /* que tipo de datos que se van a enviar*/
        },
        body: JSON.stringify(data)
    })
    return response;
}

const data = {
    "title": "Dron",
    "price": 200,
    "description": "Your favorite DRON",
    "categoryId": 1,
    "images": ["https://images.pexels.com/photos/1336185/pexels-photo-1336185.jpeg?auto=compress&cs=tinysrgb&w=600"]
}

postData(`${API}`,data)
    .then((response)=> response.json())
    .then(data => console.log('DATA :',data))
    .catch(error => console.error('Error ', error))
    .finally('Código post finalizado')
```

---

### Options :

**Method :** Se refiere a que clase de metodo http vamos a invocar

**mode :** Define cómo manejar la seguridad CORS para solicitudes a otros dominios:

- 'cors': Permite acceder a datos de otros dominios si el servidor lo autoriza.
- 'no-cors': Carga recursos sin datos detallados (imágenes, CSS) de otros dominios.
- 'same-origin': Restringe las solicitudes al mismo dominio por seguridad.

**credentials :** se usa para manejar cookies, cabeceras de autenticación y otros datos que identifican al usuario cuando se realiza una solicitud. Básicamente, controla si se envían o no estas "credenciales" (información de identificación) junto con la solicitud y también si el navegador puede guardar credenciales de una respuesta que recibe.

**headers :** Se esta indicando que tipo de Mensaje se esta enviando.

**body :** Hace referencia los datos o contenido que estoy enviando
