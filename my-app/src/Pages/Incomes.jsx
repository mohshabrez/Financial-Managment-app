import { useDispatch, useSelector } from "react-redux"
import { IncomeForm } from "../Components/IncomeForm"
import { useEffect } from "react"
import { getAllIncomes } from "../redux/actions/incomeActions"
import { getAllExpenses } from "../redux/actions/expenseActions"
import { getAllSavings } from "../redux/actions/savingsActions"
import { Filters } from "../Components/Filters"

export const Incomes = () => {
    const incomes = useSelector((state) => state.incomeState.incomes)
    const expenses = useSelector((state) => state.expenseState.expenses)
    const savings = useSelector((state) => state.savingState.savings)
    const loading = useSelector((state) => state.incomeState.incomeLoading)
    const sortMethod = useSelector((state) => state.incomeState.incomeSortMethod)
    const selectedCategory = useSelector((state) => state.incomeState.incomeSelectedCategory)
    const dispatch = useDispatch()

    useEffect(() => {
        if(incomes.length <= 0 && expenses.length <=0 && savings.length <=0){
            dispatch(getAllIncomes());
            dispatch(getAllExpenses());
            dispatch(getAllSavings());
        }
    },[])

    const applyFilters = (incomes) => {
        let filteredData = [...incomes]
        if(selectedCategory){
            if(selectedCategory !== "Select Category"){
                filteredData = filteredData.filter(({category}) => category === selectedCategory)
            }
        }
        if(sortMethod){
            filteredData.sort((a,b) => a.amount - b.amount)
        }
        return filteredData
    }

    const filteredIncomes = applyFilters(incomes)
    return(
        <div className="p-4 mt-8 text-white flex flex-col gap-7 items-center">
            <IncomeForm/>
            <Filters type="income"/>
            <h2>All Incomes:</h2>
            {loading && <h3 className="self-center">Loading</h3>}

            {!loading && (
                <div className="w-[100%] overflow-x-scroll">
                    <table className="w-[100%]">
                        <thead className="bg-gray-200 border-2 border-gray-300">
                            <tr>
                                <th className="px-2 text-black">Date</th>
                                <th className="px-2 text-black">Category</th>
                                <th className="px-2 text-black">Description</th>
                                <th className="px-2 text-black">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredIncomes?.map((income) => (
                                <tr key={income?._id} className="border-2 border-gray-300 text-center">
                                    <td className="px-2">
                                        {new Date(income?.date).toDateString()}
                                    </td>
                                    <td className="px-2">
                                        {income?.category}
                                    </td>
                                    <td className="px-2">
                                        {income?.description}
                                    </td>
                                    <td className="px-2">
                                        {income?.amount}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}