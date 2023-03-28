import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  const [expenses,updateExpenses] = useState([
    { title: "Toilet Paper", amount: 5.67, date: new Date(2023, 0, 30) },
    { title: "House Insurance", amount: 394.67, date: new Date(2022, 4, 30) },
    { title: "Health Insurance", amount: 494.67, date: new Date(2023, 5, 30) },
    { title: "Morgage Insurance", amount: 594.67, date: new Date(2023, 6, 30) },
  ]); 

const addExpenseHandler = (addedExpenses) => {

  updateExpenses((prevState) => {
    console.log("AppConfig.js");
    console.log(prevState);
    console.log(addedExpenses);
    console.log([
      ...prevState,
      addedExpenses
    ]);
    return [
      ...prevState,
      addedExpenses
    ]
  });



}
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses list={expenses}/>
    </div>
  );
}

export default App;
