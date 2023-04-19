import React, {useState} from "react";
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2023')

    console.log(filteredYear + ' year data in Expenses.js')

    const filterChangeHandler = (year) => {
        console.log(year + 'in Expenses.js')
        setFilteredYear(year)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            {
                props.expenseData.map((expense) => {
                    return <ExpenseItem expenseData={expense}></ExpenseItem>
                })
            }
        </Card>
    )

}

export default Expenses