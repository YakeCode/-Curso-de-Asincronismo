# Try and catch

Se utiliza para manejar errores que pueden ocurrir en el código sin detener completamente la ejecución del programa.

**Try :** Se encarga de intentar ejecutar el bloque de código.

**Catch :** Se encarga de capturar el error pero el programa seguiría funcionando.

**throw :** Se utiliza para enviar un error manual de otro código que estemos corriendo por fuera de esta ejecución.

```Javascript
throw new Error('el nuevo error')
```

### Ejemplo 1

```Javascript
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir entre cero"); // Lanza un error si 'b' es 0
  }
  return a / b;
}

try {
  let resultado = dividir(10, 0); // Intenta dividir 10 entre 0
  console.log("El resultado es:", resultado);
} catch (error) {
  console.log("Error capturado:", error.message); // Captura el error lanzado y muestra el mensaje
}
```

### Ejemplo 2

```Javascript
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data =  await response.json();
    return data;
}

const anotherFunction = async (urlApi) => {

    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        //console.log(products);
        console.log('title :',product.title);
        console.log('Category :',category.name);

    } catch (error) {
    console.error(error);
    }
}

anotherFunction(API);
```

# Ejemplo 3

```javascript
export async function runCode() {
  const url = "https://domain-api-com";

  try {
    const response = await fetch(url); // Intenta obtener la respuesta
    if (!response.ok) {
      // Verifica si la respuesta es exitosa
      throw new Error("API Not Found"); // Lanza el error personalizado si no es exitosa
    }
    const data = await response.json();
    console.log(data);
    return data; // Devuelve los datos si la llamada es exitosa
  } catch (err) {
    throw new Error("API Not Found"); // Lanza el error personalizado si `fetch` falla
  }
}
```
