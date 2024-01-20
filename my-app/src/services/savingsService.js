import axios from "axios"
import { BASE_URL } from "../redux/actionConstants"

export const addSavings = async (savingsData) => {
    try{
        if(!savingsData){
            throw new Error('Please add all teh specific data of savings')
        }else{
            const response = await axios.post(`${BASE_URL}/savings`,{
                ...savingsData
            },{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const {addedSavings} = response.data
            console.log(addedSavings)
            return addedSavings
        }
    }catch(error){
        throw error
    }
}

export const allSavings = async () =>{
    try{
        const response = await axios.get(`${BASE_URL}/savings`,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = response.data
        return data
    }catch(error){
        throw error
    }
}