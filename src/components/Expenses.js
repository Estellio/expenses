import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return (
        <div class="expenses">
            <ExpenseItem expenseData={props.expenseData[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expenseData[1]}></ExpenseItem>
        </div>
    )

}

export default Expenses