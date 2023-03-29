import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const initialList = props.list;
  const [expenses, filterExpenses] = useState(initialList);
  const [filteredYear, setFilterYear] = useState('2020');
  

  const expenseFilterHandler = (filteredYear) => {
    console.log(initialList);
    if (!isNaN(filteredYear)) {
      setFilterYear(filteredYear);

      filterExpenses(() => {
        return initialList.filter((expense) => expense.date.getFullYear() == filteredYear);
      });
    } else {
      filterExpenses(() => {
        return initialList;
      });
    }
  };

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilter={expenseFilterHandler}></ExpensesFilter>
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={Math.random().toString()}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
