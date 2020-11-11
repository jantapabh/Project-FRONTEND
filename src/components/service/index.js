import Axios from 'axios';
import  API from './api';


const service = async (payload) => {

    try{
        const result = await Axios.request({
            headers:{
                Authorization: `Bearer ${payload.token}`,
                'Content-Type':payload.contentType
            },
            url: `${API}${payload.url}`,
            method:payload.method,
            data:payload.data
        })

        return result;
    }

    catch(error){
        return {
            error: error.response
        }
    }
}

export default service