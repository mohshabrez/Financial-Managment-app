
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Incomes } from './Pages/Incomes';
import { Expenses } from './Pages/Expenses';
import { Savings } from './Pages/Savings';
import { Reports } from './Pages/Reports';

function App() {
  return (
    <div className="App bg-gray-800 min-h-screen">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Incomes/>}/>
        <Route path="/expenses" element={<Expenses/>}/>
        <Route path="/savings" element={<Savings/>}/>
        <Route path='/reports' element={<Reports/>}/>
      </Routes>
    </div>
  );
}

export default App;
