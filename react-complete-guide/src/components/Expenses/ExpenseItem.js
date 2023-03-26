import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

//React will take props as param, you can name it anything u want
const ExpenseItem = (props) => {
  //From here we return JSX code
  return (
  
    //in JSX, it is not HTML, we cannot put class, but we are using className
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expensive-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
