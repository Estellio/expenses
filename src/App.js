import './App.css';

import Expenses from "./components/Expenses/Expenses";

function App() {
    const expenses = [
    {
        date: new Date(2023, 0, 10),
        title: 'New book',
        price: 10.99
    },
    {
        date: new Date(2023, 0, 10),
        title: 'New shelf',
        price: 99.99
    }
]

  return (
    <div className="App">
        <Expenses expenseData={expenses}></Expenses>
    </div>
  );
}

export default App;
