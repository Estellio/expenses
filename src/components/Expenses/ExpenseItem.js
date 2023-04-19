import React, { useState} from "react";
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expenseData.title)

    const clickHandler = () => {
        setTitle('New shelf')
        console.log(title)
    }
    return (
        <div className="expense-item card">
            <ExpenseDate date={props.expenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.expenseData.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    )
}

export default ExpenseItem