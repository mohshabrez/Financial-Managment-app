import {  ADD_INCOME, INCOMES, INCOME_ERROR, INCOME_FILTERS, INCOME_INPUT, INCOME_LOADING, INCOME_SORT, RESET_INCOME } from "../actionConstants"

export const initialState = {
    incomes:[],
    incomeInput:{
        description: "",
        category:"",
        amount: 0
    },
    incomeLoading: false,
    incomeError: "",
    incomeSortMethod: "",
    incomeSelectedCategory: ""
}

export const incomeReducer = (state = initialState, action) => {
    switch(action.type){
        case INCOME_INPUT:
            return {...state, incomeInput: action.payload}
        case INCOMES:
            return {...state, incomes: [...action.payload], incomeLoading: false, incomeError: "" }
        case ADD_INCOME:
            return {...state, incomes: [...state.incomes, action.payload], incomeInput: {
                description: "", category: "", amount: 0
            }, incomeLoading: false}
        case INCOME_FILTERS:
            const selectedCategory = action.payload
            return {...state, incomeSelectedCategory: selectedCategory}
        case INCOME_SORT:
            return {...state, incomeSortMethod: action.payload}
        case INCOME_LOADING:
            return {...state, incomeLoading: true}
        case INCOME_ERROR:
            return {...state, incomeError: action.payload, incomeLoading: false}
        case RESET_INCOME:
            return {...state, incomeInput: {
                description: "", category: "", amount: 0
            }, incomeError: ""}
            default:
            return {...state}
    }
}