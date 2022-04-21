import axios from 'axios';

export const getPrevisao = (city) => {

    return new Promise(async(resolve, reject) => {
    
        try {
            const response = await axios.get(`https://apiprevmet3.inmet.gov.br/previsao/${city}`)
            resolve(response.data)

        } catch (error) {
            reject ("algo deu errado no Axios")
        }
    })
    
}