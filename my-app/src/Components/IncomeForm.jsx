import { useDispatch, useSelector } from "react-redux"
import { IncomeCategories } from "../utils/incomeUtils"
import { useEffect } from "react"
import { RESET_INCOME } from "../redux/actionConstants"
import { addNewIncome, incomeInput } from "../redux/actions/incomeActions"

export const IncomeForm = () => {
    const userInput = useSelector((state) => state.incomeState.incomeInput)
    const error = useSelector((state) => state.incomeState.incomeError)
    const dispatch = useDispatch()

    useEffect(() => {
        return function (){
            dispatch({ type: RESET_INCOME})
        }
    },[])

    const handleAddIncome = () => {
        dispatch(addNewIncome(userInput))
    }

    return(
        <div>
            <h1> Add New Income: </h1>
            <div className="flex gap-2 flex-wrap mt-2">
                <label className="flex flex-col">
                    Category:
                    <select 
                    onChange={(e) => dispatch(incomeInput({
                        ...userInput, category: e.target.value
                    }))}
                    value={userInput.category}
                    className="border-2 text-black outline-2 outline-blue-500 rounded-md h-max self-end px-2">
                        {IncomeCategories.map((category) => {
                            return(
                                <option key={category} className="bg-gray-400">
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
                            dispatch(incomeInput({
                                ...userInput, 
                                description: e.target.value
                            }))
                        }
                        value={userInput.description}
                        type = "text"
                        placeholder="Enter Description"
                        className="border-2 text-black rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"/>
                </label>
                <label className="flex flex-col">
                        Amount:
                        <input onChange={(e) => 
                            dispatch(incomeInput({
                                ...userInput, 
                                amount: e.target.value
                            }))
                        }
                        value={userInput.amount}
                        type= "number"
                        placeholder="Enter Amount"
                         className="border-2 text-black rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"/>
                </label>
                <button onClick={handleAddIncome} className="bg-gray-500 text-white px-4 py-0.5 rounded-md hover:shadow-lg h-max self-end">
                    Add
                </button>
            </div>
            { error && <small className="text-red-600">{`* ${error}`}</small>}
        </div>
    )
}