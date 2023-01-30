import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Toilet Paper", amount: 5.67, date: new Date(2023, 0, 30) },
    { title: "House Insurance", amount: 394.67, date: new Date(2023, 4, 30) },
    { title: "Health Insurance", amount: 494.67, date: new Date(2023, 5, 30) },
    { title: "Morgage Insurance", amount: 594.67, date: new Date(2023, 6, 30) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
