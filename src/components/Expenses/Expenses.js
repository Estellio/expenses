import React, {useState} from "react";
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023')

    console.log(filteredYear + ' year data in Expenses.js')

    const filterChangeHandler = props.expenseData.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent = <p>No expenses found.</p>
    if(filterChangeHandler.length > 0) {
        expensesContent = filterChangeHandler.map((expense) => {
            return <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.amount}
            ></ExpenseItem>
        })
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={setFilteredYear}></ExpensesFilter>
            {expensesContent}
        </Card>
    )

}

export default Expenses