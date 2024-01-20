import { addIncome, allIncomes } from "../../services/incomeService";
import { validateIncome } from "../../utils/incomeUtils";
import {  ADD_INCOME, INCOMES, INCOME_ERROR, INCOME_INPUT, INCOME_LOADING } from "../actionConstants";

export const incomeInput = (userInput) => ({
    type: INCOME_INPUT, 
    payload: userInput
})


export const addNewIncome = (incomeDetails) => async (dispatch) => {
    try{
        dispatch({ type: INCOME_LOADING})

        const validateInput = validateIncome(incomeDetails)

        if(!validateInput){
            throw new Error('Please enter all the required fields')
        }else{
            dispatch({ type: INCOME_ERROR, payload: ""})
        }

        incomeDetails.date = new Date();

        const addingIncome = await addIncome(incomeDetails)
    
        dispatch({ type: ADD_INCOME, payload: addingIncome})
    }catch(error){
        dispatch({ type: INCOME_ERROR,payload: error})
    }
}

export const getAllIncomes = () => async (dispatch) => {
    try{
        dispatch({type: INCOME_LOADING})

        const incomes = await allIncomes()
        dispatch({ type: INCOMES, payload: incomes})
    }catch(error){
        dispatch({ type: INCOME_ERROR, payload: error})
    }
}