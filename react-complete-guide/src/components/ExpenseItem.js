import "./ExpenseItem.css";

//React will take props as param, you can name it anything u want
function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US',{month:'long'});
  const day = props.date.toLocaleString('en-US',{day:'2-digit'});
  const year = props.date.getFullYear();

  //From here we return JSX code
  return (
  
    //in JSX, it is not HTML, we cannot put class, but we are using className
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expensive-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
