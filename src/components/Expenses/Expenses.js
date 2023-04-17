import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const expenseFilterHandler = (selectedYear) => {
        console.log(selectedYear)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onExpenseFilter={expenseFilterHandler}></ExpensesFilter>
            <ExpenseItem expenseData={props.expenseData[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expenseData[1]}></ExpenseItem>
        </Card>
    )

}

export default Expenses