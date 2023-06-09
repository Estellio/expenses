import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        date: new Date(2023, 0, 10),
        title: 'New book',
        amount: 10.99
    },
    {
        id: 'e2',
        date: new Date(2023, 0, 10),
        title: 'New shelf',
        amount: 99.99
    },
    {
        id: 'e3',
        date: new Date(2024, 9, 4),
        title: 'Pirko',
        amount: 399.99
    }
]

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const addExpenseHandler = (expense) => {
        console.log('In App.js')
        setExpenses((previousExpenses) => {
            return [expense, ...previousExpenses]
        })
    }

    console.log(expenses)

  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        <Expenses expenseData={expenses}></Expenses>
    </div>
  );
}

export default App;
