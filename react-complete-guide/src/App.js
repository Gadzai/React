import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const DUMMY_DATA = [
    { id:'e1',title: "Toilet Paper", amount: 5.67, date: new Date(2023, 0, 30) },
    { id:'e2',title: "House Insurance", amount: 394.67, date: new Date(2022, 4, 30) },
    { id:'e3',title: "Health Insurance", amount: 494.67, date: new Date(2023, 5, 30) },
    { id:'e4',title: "Morgage Insurance", amount: 594.67, date: new Date(2023, 6, 30) },
  ];

  const [expenses, updateExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (addedExpenses) => {
    updateExpenses((prevState) => {
      return [addedExpenses, ...prevState];
    });
    
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
