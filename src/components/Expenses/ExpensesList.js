import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

const ExpenseList = (props) => {
    if(props.filterChangeHandler.length === 0) {
        return <p className="expenses-list__fallback">No expenses found</p>
    }

    return (
        <ul className="expenses-list">
            {
                props.filterChangeHandler.map((expense) => {
                    return <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        amount={expense.amount}
                    ></ExpenseItem>
                })
            }
        </ul>
    )
}

export default ExpenseList