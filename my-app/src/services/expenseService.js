import axios from "axios"
import { BASE_URL } from "../redux/actionConstants"

export const addExpense = async (expenseDetails) => {
    try{
        if(!expenseDetails){
            throw new Error('Please enter all Expense Details')
        }
       else{
        const response = await axios.post(`${BASE_URL}/expenses`, {
            ...expenseDetails
        }, {
            headers:{
                "Content-Type": "application/json"
            }
        })
        const addedExpense = response.data
        return addedExpense
       }
    }
    catch(error){
        throw error
    }
}


export const allExpenses = async () =>{
    try{
        const response = await axios.get(`${BASE_URL}/expenses`,{
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