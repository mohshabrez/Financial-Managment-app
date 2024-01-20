import { ADD_EXPENSE, EXPENSES, EXPENSE_ERROR, EXPENSE_FILTERS, EXPENSE_INPUT, EXPENSE_LOADING, EXPENSE_SORT, RESET_EXPENSE } from "../actionConstants"

export const initialState = {
    expenses: [],
    expenseInput: {
        description: "",
        category: "",
        amount: 0,
    },
    expenseSortMethod: "",
    expenseSelectedCategory: "",
    expenseLoading: "",
    expenseError: ""
}

export const expenseReducer = (state = initialState, action) => {
    switch (action.type){
        case EXPENSE_INPUT:
            return { ...state, expenseInput: action.payload}
        case EXPENSES:
            return {...state, expenses: [...action.payload], expenseLoading: false, expenseError: ""}
        case ADD_EXPENSE:
            return {...state, expenses: [...state.expenses, action.payload], expenseInput:{
                description: "", category: "", amount: 0
            }, expenseLoading: false}
        case EXPENSE_FILTERS:
            const selectedCategory = action.payload;
            return {...state, expenseSelectedCategory: selectedCategory}
        case EXPENSE_SORT:
            return {...state, expenseSortMethod: action.payload}
        case EXPENSE_LOADING:
            return {...state, expenseLoading: true}
        case EXPENSE_ERROR:
            return {...state, expenseError: action.payload, expenseLoading: false}
        case RESET_EXPENSE:
            return {...state, expenseInput: {
                description: "", category: "", amount: 0
            }, expenseError: "",}
        default:
            return {...state}
    }
}