// Consumir API
const ChanelID = 'UCbx_d228PdYwgB4Jz202SIQ'

const API = `https://youtube-v31.p.rapidapi.com/search?channelId=UCbx_d228PdYwgB4Jz202SIQ&part=snippet%2Cid&order=date&maxResults=5`;



const optionsFetch = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3584f3b1b6mshc9e36d34e0d0b06p1bbba6jsnc3f7068f32b8',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

const fetchData = async (url, options)=>{
    try{
        const response = await fetch(url, options)
        if (!response.ok){
            throw new Error ('No hay respuesta de la API')
        }
        const data = await response.json();
        console.log(data)
    } catch (err) {
        console.error('Error', err)
    }
}

fetchData(API,optionsFetch)

