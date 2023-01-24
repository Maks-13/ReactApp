/* import React, { useState } from 'react';
import ExpenseForm from "./ExpenseForm";


const OpenExpenseForm = (props) => {

    const [pageUpdated, setPageUpdated] = useState(false);

    const closeButtonHandler = () => {
        setPageUpdated(false);
    }

    const openExpenseFormHandler = () => {
       const defaultForm = (<ExpenseForm onCloseButton={closeButtonHandler} onUpdatePage={setPageUpdated} onSaveExpenseData={props.onSaveExpenseData} />);
       setPageUpdated(defaultForm);
    }

    const defaultButton = (<div>
        <button onClick={openExpenseFormHandler}>Add Expense</button>
    </div>);

    if (pageUpdated !== false) {
        return pageUpdated;
    }
    return defaultButton;

}

export default OpenExpenseForm; */