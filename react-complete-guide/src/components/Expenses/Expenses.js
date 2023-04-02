import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState("2020");

  const filteredExpenses = props.items.filter((expense) => {
    if (!isNaN(filteredYear)) {
      return expense.date.getFullYear().toString() === filteredYear;
    } else {
      return expense;
    }
  });

  const expenseFilterHandler = (filteredYear) => {
    setFilterYear(filteredYear);
  };

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onFilter={expenseFilterHandler}
          ></ExpensesFilter>
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList items={filteredExpenses} />
        </Card>
      </li>
    </div>
  );
};

export default Expenses;
