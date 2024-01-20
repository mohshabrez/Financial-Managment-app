import { ADD_SAVINGS, RESET_SAVINGS, SAVINGS, SAVINGS_ERROR, SAVINGS_FILTERS, SAVINGS_INPUT, SAVINGS_SORT } from "../actionConstants"

export const initialState = {
    savings:[],
    savingInput: {
        description: "",
        category: "",
        amount: 0
    },
    savingsSortMethod: "",
    savingsSelectedCategory: "",
    savingsLoading: "",
    savingsError:""
}

export const savingsReducer = (state = initialState, action) => {
    switch(action.type){
        case SAVINGS_INPUT:
            return {...state, savingInput: action.payload}
        case SAVINGS:
            return {...state, savings: [...action.payload], savingsLoading: false, savingsError: ""}
        case ADD_SAVINGS:
            return {...state, savings: [...state.savings, action.payload], savingInput:{
                description: "", category: "", amount: 0
            }, savingsLoading: false}
        case SAVINGS_FILTERS:
            const selectedCategory = action.payload;
            return {...state, savingsSelectedCategory: selectedCategory }
        case SAVINGS_SORT:
            return {...state, savingsSortMethod: action.payload}
        case SAVINGS_ERROR:
            return {...state, savingsError: action.payload, savingsLoading: false}
        case RESET_SAVINGS:
            return { ...state, savingInput: {
                description: "", category: "", amount: 0
            }, savingsError: ""}    
        default:
            return {...state}
    }
}