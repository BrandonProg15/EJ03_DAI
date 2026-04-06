import axios from 'axios';
import https from 'https'; 

async function obtenerPais(nombrePais) {
    try {
        const response = await axios.get(
            `https://restcountries.com/v3.1/name/${nombrePais}?fullText=true`,
            { httpsAgent: new https.Agent({ rejectUnauthorized: false }) } 
        );
        
        const pais = response.data[0]; 

        const capital = pais.capital ? pais.capital[0] : 'No disponible';
        const region = pais.region;
        const poblacion = pais.population;

        console.log(`País: ${pais.name.common}`);
        console.log(`Capital: ${capital}`);
        console.log(`Región: ${region}`);
        console.log(`Población: ${poblacion}`);

    } catch (error) {
        console.error('Error al obtener datos del país:', error.message);
    }
}

obtenerPais("Brazil");