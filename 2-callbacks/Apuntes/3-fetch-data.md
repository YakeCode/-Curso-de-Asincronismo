# Fetch Data

## API Data Fetcher

Este script realiza peticiones a una API utilizando `XMLHttpRequest` para obtener datos de productos, el detalle de un producto específico y la categoría asociada a dicho producto. El código emplea una estructura de callbacks para manejar las respuestas.

## Descripción de los componentes

### Variables y Constantes

- **XMLHttpRequest**: Se importa la biblioteca `XMLHttpRequest` para permitir hacer solicitudes HTTP en Node.js.
- **API**: URL base de la API de la cual se obtendrán los datos. Se define en mayúsculas, indicando que es una constante y no cambiará en el código.

### Función `fetchData`

La función `fetchData` toma una URL de la API y un callback para manejar la respuesta. Realiza una petición `GET` asincrónica y ejecuta el callback con los datos recibidos o un error, en caso de que ocurra alguno.

#### Parámetros

- `urlApi` (string): La URL de la API a la que se realizará la solicitud.
- `callback` (function): La función a ejecutar una vez recibida la respuesta. Recibe dos argumentos:
  - `error`: Si ocurre un error en la solicitud, se pasa como el primer argumento.
  - `data`: Si la solicitud es exitosa, se pasa la respuesta parseada como JSON.

#### Funcionamiento Interno

1. **Creación de la solicitud**: Se crea una instancia de `XMLHttpRequest`.
2. **Configuración de la solicitud**: Se inicializa la petición `GET` con la URL proporcionada y se define como asincrónica (`true`).
3. **Manejo del estado de la solicitud**:
   - Se espera que `readyState` sea `4`, lo que indica que la operación ha finalizado.
   - Si el `status` es `200`, la respuesta es exitosa, se convierte la respuesta (`responseText`) a un objeto JSON y se ejecuta el callback con `null` como primer argumento y los datos en el segundo.
   - Si ocurre un error, se crea un nuevo `Error` y se ejecuta el callback pasando el error y `null` para los datos.
4. **Envía la solicitud**.

### Ejecución de `fetchData`

El código realiza tres llamadas anidadas a `fetchData` para obtener:

1. Una lista de productos.
2. Los detalles del primer producto en la lista.
3. La categoría del producto.

#### Pasos

1. **Primera solicitud**: Llama a `${API}/products` para obtener la lista de productos.
   - Si hay un error, lo imprime en la consola.
2. **Segunda solicitud**: Llama a `${API}/products/${data1[0].id}` usando el `id` del primer producto en la lista para obtener los detalles del producto.
   - Si hay un error, lo imprime en la consola.
3. **Tercera solicitud**: Llama a `${API}/categories/${data2?.category?.id}` usando el `id` de la categoría del producto para obtener el nombre de la categoría.
   - Si hay un error, lo imprime en la consola.

### Ejemplo de Salida

Si las tres solicitudes son exitosas, se imprime en la consola:

- El primer objeto en la lista de productos (`data1[0]`).
- El título del producto (`data2.title`).
- El nombre de la categoría (`data3.name`).

## Ejecución del Código

Para ejecutar este script, asegúrate de tener instalado `xmlhttprequest`:

```bash
npm install xmlhttprequest
```
