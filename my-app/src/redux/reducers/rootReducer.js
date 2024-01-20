import { combineReducers } from "redux";
import { expenseReducer } from "./expenseReducer";
import { incomeReducer } from "./incomeReducer";
import { savingsReducer } from "./savingsReducer";

export const rootReducer = combineReducers({
    expenseState: expenseReducer,
    incomeState: incomeReducer,
    savingState: savingsReducer
})