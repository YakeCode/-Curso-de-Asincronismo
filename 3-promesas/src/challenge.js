//@ts-check

const API = 'https://api.escuelajs.co/api/v1'

const fetchData = (url)=>{
    return fetch(url)
}

{ /*
    // Traer los productos
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products[0])
    })
    .catch(error => console.error('Error ', error))

    fetchData(`${API}/products`)
    */
}

{
    // Calback Hell
    fetchData (`${API}/products`) /*trae una lista de productos*/
    .then(response => response.json())
    .then(products=> {
        return fetchData (`${API}/products/${products[0].id}`)/*trae el primer producto */
    })
    .then(response => response.json()) 
    .then(product =>{
        return fetchData (`${API}/categories/${product.id}`) /* obtiene el id del primer producto para buscarlo en categorías */
    } )
    .then (resolve => resolve.json())
    .then (category => console.log('nombre categoría ', category.name)) /*trae el nombre de la categoria del elemento buscado por el id */
    
}
