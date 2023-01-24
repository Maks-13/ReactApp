import React, { useState } from 'react';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter.js';
import Card from '../UI/Card.js';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const ShowData = (props) => {

  const [selectedFilterValue, setFilteredYear] = useState('2022');

  const expenseHandler = (value) => {
    setFilteredYear(value);
  }

  const filteredExpenses = props.data.filter(item => {
    return item.date.getFullYear().toString() === selectedFilterValue;
  })

  return (
      <Card className='expense'>
        <ExpenseFilter selected={selectedFilterValue} onSaveFilter={expenseHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
  );
}

export default ShowData;