import axios from 'axios'
import {urlpost,urlSheet2,urlSheetMain} from './config'

async function getSheet2(token,col) {

    const request = await axios.get(`${urlSheet2}${col}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                
            }

        })

    return request.data.values

}

async function postSheetValues() {

    const request = await axios.post(`${urlpost}`,
        {
            headers: {
                Authorization: "Bearer 4/ya29.A0AfH6SMD2VI9HYqse68VZk0dG0ufmBpRoXBiwc4zIZANdVPYkAy8OGhTC1RwxEYK1GIr4QI-aNSkRYDO89Zbct9A0JUM7JBNKvMSfkL57ZU4GByq23N_LpbxDt_F2ZlwlD7oMbqmL-iNrAoEgryuTfOiTLaRrU2DBq1dGlJUOzf4",
                Content_Type: "application/x-www-form-urlencoded",
                User_Agent:"google-oauth-playground",
                Content_length:"320",
                Host: "www.googleapis.com"
            }
        })

    return request

}

async function getSheet(token,col) {

    const request = await axios.get(`${urlSheetMain}${col}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                
            }

        })

    return request.data.values

    

}

export default{
    postSheetValues,
    getSheet2,
    getSheet
}