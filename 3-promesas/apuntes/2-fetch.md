# Fetch

**Fetch** por defecto ya es una promesa y con ella trae metodos como **.then** y **.catch**

**Nota :** Si utilizamos versiones anteriores a node 18, debemos instalar sus dependencias

```bash
    npm install node-fetch
```

**Explicación practica :**

```Javascript
// Trae la api que no cambiara por eso esta todo en mayúscula
const API = 'https://api.escuelajs.co/api/v1'

//Se crea una función fetch reutilizable
const fetchData = (url)=>{
    return fetch(url)
}

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products[0])
    })
    .catch(error => console.error('Error ', error))

```

**Callback Hell con promesas :**

```Javascript
    fetchData (`${API}/products`) /*trae una lista de productos*/
    .then(response => response.json())
    .then(products=> {
        console.log('products ', products)
        return fetchData (`${API}/products/${products[0].id}`)/*trae el primer producto */
    })
    .then(response => response.json())
    .then(product =>{
        console.log('primer producto', product)
        return fetchData (`${API}/categories/${product.id}`) /* obtiene el id del primer producto para buscarlo en categorías */
    } )
    .then (resolve => resolve.json())
    .then (category => console.log('nombre categoría ', category.name)) /*trae el nombre de la categoria del elemento buscado por el id */
```
