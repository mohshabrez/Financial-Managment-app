import axios from "axios"
import { BASE_URL } from "../redux/actionConstants"

export const addIncome = async (incomeData) => {
    try{
        if(!incomeData){
            throw new Error('Please enter all specific details')
        }
        else{
            const response = await axios.post(`${BASE_URL}/incomes`,{
                ...incomeData
            },{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const {addedIncome} = response.data
            return addedIncome
        }
    }catch(error){
        throw error
    }
}

export const allIncomes = async () => {
    try{
        const response = await axios.get(`${BASE_URL}/incomes`,{
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