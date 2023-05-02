import React, {useState} from "react";
import './ExpenseForm.css'
import './NewExpense.css'

const ExpenseForm = (props) => {

    const titleChangeHandler = (event) => {
        console.log(event.target.value)
    }

    const amountChangeHandler = (event) => {
        console.log(event.target.value)
    }

    const dateChangeHandler = (event) => {
        console.log(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: event.target[0].value,
            amount: event.target[1].value,
            date: new Date(event.target[2].value)
        }
        props.onSaveExpenseData(expenseData)
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2023-01-01' max='2025-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit' className='new-expense button'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm