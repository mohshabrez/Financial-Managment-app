import { validateExpense } from "../../utils/expenseUtils";
import { ADD_EXPENSE, EXPENSES, EXPENSE_ERROR, EXPENSE_INPUT, EXPENSE_LOADING } from "../actionConstants";
import { addExpense, allExpenses } from "../../services/expenseService";

export const expenseInput = (userInput) => ({
    type: EXPENSE_INPUT,
    payload: userInput
})

export const addNewExpense = (expenseData) => async (dispatch) => {
    try{
        dispatch({ type: EXPENSE_LOADING})

        const vaildateInput = validateExpense(expenseData)

        if(!vaildateInput){
            throw new Error('Please select all the required fields')
        }
        else{
            dispatch({ type:EXPENSE_ERROR, payload: ""})
        }

        expenseData.date = new Date()
        const addedExpense = await addExpense(expenseData)
        dispatch({ type: ADD_EXPENSE, payload: addedExpense})
    }catch(error){
        dispatch({ type: EXPENSE_ERROR, payload: error})
    }
}

export const getAllExpenses = () => async (dispatch) => {
    try{
        dispatch({ type: EXPENSE_LOADING})
        const expenses = await allExpenses()

        dispatch({ type: EXPENSES, payload: expenses})
    }catch(error){
        dispatch({ type: EXPENSE_ERROR, error: error})
    }
}

