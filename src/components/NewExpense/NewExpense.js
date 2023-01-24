 import React, {useState} from 'react';
 import './NewExpense.css';
 import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDateHandler = (enteredexpenseData) => {
        const expenseData = {
            ...enteredexpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

   const openFormHandler = () => {
    setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
     <div className='new-expense'>
        {!isEditing && <button onClick={openFormHandler}>Add new expenses</button>}
        {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDateHandler} onCancel = {stopEditingHandler}/>}
     </div>
    )
}


export default NewExpense;