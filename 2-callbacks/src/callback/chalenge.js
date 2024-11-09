const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/*En, mayuscula es un valor que no va a cambiar en nuestros archivos */
const API = 'https://api.escuelajs.co/api/v1';

const fetchData = (urlApi, callback)=>{
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true)

    xhttp.onreadystatechange = (event)=>{

        if (xhttp.readyState === 4){
            if (xhttp.status === 200){

                /* JSON.parse  toma el texto (responseText) y lo convierte en un objeto Json */
                callback(null, JSON.parse(xhttp.responseText))
            }else {
                const error =  new Error ('Error ' + urlApi)
                return callback(error, null)
            } 
        }
    }
    xhttp.send();
}

// 03

fetchData (`${API}/products` , (error1, data1)=>{
    if (error1) return console.error(`Error Products:${error1}`);
    fetchData( `${API}/products/${data1[0]?.id}`, (error2, data2)=>{
        if (error2) return console.error(`Error ID:${error2}`);
        fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3)=>{
            if (error3) return console.error(`Error Category:${error3}`);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name)
        })
    })
})
