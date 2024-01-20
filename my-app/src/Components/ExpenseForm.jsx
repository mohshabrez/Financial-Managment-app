import { useDispatch, useSelector } from "react-redux"
import { expenseCategories } from "../utils/expenseUtils"
import { useEffect } from "react";
import { RESET_EXPENSE } from "../redux/actionConstants";
import { addNewExpense, expenseInput } from "../redux/actions/expenseActions";

export const ExpenseForm = () => {
    const userInput = useSelector((state) => state.expenseState.expenseInput);
    const error = useSelector((state) => state.expenseState.expenseError)
    const dispatch = useDispatch()

    useEffect(() => {
        return function(){
            dispatch({ type: RESET_EXPENSE})
        }
    },[])

    const handleAddExpense = () => {
        dispatch(addNewExpense(userInput))
    }

    return(
        <div className="flex gap-2 flex-wrap mt-2">
            <label className="flex flex-col">
                Category:
                <select 
                onChange={(e) => 
                    dispatch(expenseInput({
                        ...userInput, 
                        category: e.target.value
                    }))
                }
                value={userInput.category}
                className="border-2 outline-2 text-black font-semibold outline-blue-500 rounded-md h-max self-end px-2">
                    {expenseCategories.map((category) => {
                        return(
                            <option key={category} className="bg-gray-500">
                                {category}
                            </option>
                        )
                    })}
                </select>
            </label>
            <label className="flex flex-col">
                    Description:
                    <input 
                    onChange={(e) => 
                    dispatch(
                        expenseInput({
                            ...userInput, 
                            description: e.target.value
                        })
                    )
                    }
                    value={userInput.description}
                    type="text"
                    placeholder="Enter Description"
                    className="border-2 text-black rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"/>
            </label>
            <label className="flex flex-col">
                Amount:
                <input 
                onChange={(e) => 
                dispatch(
                    expenseInput({
                        ...userInput,
                        amount: e.target.value
                    })
                )
                }
                value={userInput.amount}
                type="number"
                placeholder="Enter Amount"
                className="border-2 text-black rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"/>
            </label>
            <button 
            onClick={handleAddExpense}
            className="bg-blue-500 text-white px-4 py-0.5 rounded-md hover:shadow-lg h-max self-end">
               Add
            </button>
            {error && <small className="text-red-600">{`*${error}`}</small>}
        </div>
    )
} 