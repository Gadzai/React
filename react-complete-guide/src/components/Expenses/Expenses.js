import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const initialList = props.list;
  const [filteredExpenses, filterExpenses] = useState(initialList);
  const [filteredYear, setFilterYear] = useState("2020");

  const expenseFilterHandler = (filteredYear) => {
    console.log(initialList);
    if (!isNaN(filteredYear)) {
      setFilterYear(filteredYear);

      filterExpenses(() => {
        return initialList.filter(
          (expense) => expense.date.getFullYear() == filteredYear
        );
      });
    } else {
      filterExpenses(() => {
        return initialList;
      });
    }
  };


  return (
    <div>
      <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilter={expenseFilterHandler}
        ></ExpensesFilter>
        <ExpensesList items = {filteredExpenses}/>
      </Card>
      </li>
    </div>
  );
};

export default Expenses;
