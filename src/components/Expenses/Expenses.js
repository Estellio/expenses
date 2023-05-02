import React, {useState} from "react";
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023')

    console.log(filteredYear + ' year data in Expenses.js')

    const filterChangeHandler = props.expenseData.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={setFilteredYear}></ExpensesFilter>
            <ExpensesList filterChangeHandler={filterChangeHandler}></ExpensesList>
        </Card>
    )

}

export default Expenses