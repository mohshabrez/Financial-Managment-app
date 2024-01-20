import { addSavings, allSavings } from "../../services/savingsService";
import { validateSavings } from "../../utils/savingsUtils";
import { ADD_SAVINGS, SAVINGS, SAVINGS_ERROR, SAVINGS_INPUT, SAVINGS_LOADING } from "../actionConstants";

export const savingsInput = (userInput) => ({
    type: SAVINGS_INPUT,
    payload: userInput
})

export const addNewSavings = (savingsData) => async (dispatch) => {
    try{
        dispatch({ type: SAVINGS_LOADING})
        
        const validateInput = validateSavings(savingsData)
        if(!validateInput){
            throw new Error('Please check all the fields')
        }else{
            dispatch({ type: SAVINGS_ERROR, payload: ""})
        }

        savingsData.date = new Date();
        const addingSavings = await addSavings(savingsData)
        dispatch({ type: ADD_SAVINGS, payload: addingSavings})
    }
    catch(error){
        dispatch({ type: SAVINGS_ERROR, payload: error})
    }
}


export const getAllSavings = () => async (dispatch) => {
    try{
        dispatch({ type: SAVINGS_LOADING})

        const savings = await allSavings()
        dispatch({ type: SAVINGS, payload: savings})
    }catch(error){
        dispatch({ type: SAVINGS_ERROR, payload: error})
    }
}