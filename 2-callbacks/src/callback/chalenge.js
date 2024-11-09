const XMLHttpRequest = require('xmlhttprequest');

/*En, mayuscula es un valor que no va a cambiar en nuestros archivos */
const API = 'https://api.escuelajs.co/api/v1/';

const fetchData = (urlApi, callback)=>{
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true)

    xhttp.onreadystatechange = (event)=>{

        if (xhttp.readyState === 4){
            if (xhttp.status === 200){

                /* JSON.parse  toma el texto (responseText) y lo convierte en un objeto Json */
                callback(null, JSON.parse(xhttp.responseText))
            }
        } else {
            const error =  new Error ('Error ' + urlApi)
            return callback(error, null)
        }
    }
    xhttp.send();
}
