import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return(
        <nav className="px-4 py-3 flex flex-wrap justify-between shadow-md rounded-b-md">
            <h1 className="bg-gradient-to-r from-orange-600 to-red-500 text-transparent bg-clip-text">
                <NavLink to="/">Financial Managment</NavLink>
            </h1>
            <ul className="flex items-center gap-2 md:gap-4 text-white flex-wrap font-semibold">
                <li className="hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-500 hover:text-transparent hover:bg-clip-text">
                    <NavLink to="/">Incomes</NavLink>
                </li>
                <li className="hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-500 hover:text-transparent hover:bg-clip-text">
                    <NavLink to="/expenses">Expenses</NavLink>
                </li>
                <li className="hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-500 hover:text-transparent hover:bg-clip-text">
                    <NavLink to="/savings">Savings</NavLink>
                </li>
                <li className="hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-500 hover:text-transparent hover:bg-clip-text">
                    <NavLink to="/reports">Reports</NavLink>
                </li>
            </ul>
        </nav>
    )
}