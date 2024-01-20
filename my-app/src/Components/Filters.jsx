import { useDispatch, useSelector } from "react-redux"
import { IncomeCategories } from "../utils/incomeUtils"
import { EXPENSE_FILTERS, EXPENSE_SORT, INCOME_FILTERS, INCOME_SORT, SAVINGS_FILTERS, SAVINGS_SORT } from "../redux/actionConstants"
import { savingsCategories } from "../utils/savingsUtils"
import { expenseCategories } from "../utils/expenseUtils"

export const Filters = ({ type = "income"}) => {
    const incomeSortMethod = useSelector((state) => state.incomeState.incomeSortMethod)
    const incomeSelectedCategory = useSelector((state) => state.incomeState.incomeSelectedCategory)
    const expenseSortMethod = useSelector((state) => state.expenseState.expenseSortMethod)
    const expenseSelectedCategory = useSelector((state) => state.expenseState.expenseSelectedCategory)
    const savingSortMethod = useSelector((state) => state.savingState.savingSortMethod)
    const savingSelectedCategory = useSelector((state) => state.savingState.savingSelectedCategory)
    const dispatch = useDispatch()

    const getFilterData = () => {
        switch(type){
            case "income":
                return {
                    categories: IncomeCategories,
                    sortType: INCOME_SORT,
                    filterType: INCOME_FILTERS,
                    sortMethod: incomeSortMethod,
                    selectedCategory: incomeSelectedCategory
                }
            case "saving":
                return{
                    categories: savingsCategories,
                    sortType: SAVINGS_SORT,
                    filterType: SAVINGS_FILTERS,
                    sortMethod: savingSortMethod,
                    selectedCategory: savingSelectedCategory
                }
            case "expense":
                return {
                    categories: expenseCategories,
                    sortType: EXPENSE_SORT,
                    filterType: EXPENSE_FILTERS,
                    sortMethod: expenseSortMethod,
                    selectedCategory: expenseSelectedCategory
                }
            default:
                return  {}
        }
    }

    const filterData = getFilterData()

    return (
        <div>
            <h2>Filters: </h2>
            <div className="flex gap-4 items-center flex-wrap mt-2">
                <label>
                    <input onChange={(e) => 
                        dispatch({
                            type: filterData.sortType,
                            payload: filterData.sortMethod === "amount"
                        })
                    } checked= {filterData.sortMethod === "amount"}
                        type = "checkbox"
                        value="amount"
                        className="mr-1 text-black"
                    />
                    Amount
                </label>
                    <label>
                        Category:
                        <select onChange={(e) => 
                            dispatch({ type: filterData.filterType, payload: e.target.value})
                        } value={filterData.selectedCategory}
                        className="border-2 text-black outline-2 outline-blue-500 rounded-md h-max self-end px-2 ml-2"
                        >
                            {
                                filterData.categories.map((category) => {
                                    return(
                                        <option key={category} className="bg-gray-400 text-black">
                                            {category}
                                        </option>
                                    )
                                })
                            }

                        </select>
                    </label>
            </div>
        </div>
    )
}