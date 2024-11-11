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