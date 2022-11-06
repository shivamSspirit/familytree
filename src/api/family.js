import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/family'

export async function getFamilyData(){
    try {
        const response = await axios.get(`${baseUrl}`,{})
        console.log('get res',response)
        return response;
    } catch (error) {
        console.error(error)
    }
}

export async function postFamilyData(familyData){
    try {
        const response = await axios.post(`${baseUrl}`,familyData,{headers: { "Content-Type": "multipart/form-data" }})  
        console.log('post res',response)
        return response 
    } catch (error) {
       console.error(error) 
    }
}