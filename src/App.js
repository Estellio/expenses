import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const DUMMY_EXPENSES = [
    {
        date: new Date(2023, 0, 10),
        title: 'New book',
        amount: 10.99
    },
    {
        date: new Date(2023, 0, 10),
        title: 'New shelf',
        amount: 99.99
    }
]

    const addExpenseHandler = (expense) => {
        console.log('In App.js')
        console.log(expense)
    }

  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        <Expenses expenseData={DUMMY_EXPENSES}></Expenses>
    </div>
  );
}

export default App;
