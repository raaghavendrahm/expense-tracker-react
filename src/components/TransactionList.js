const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {/* Below li is hardcoded now till "transaction" component is created */}
        <li className="minus">
          Cash <span>-$400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
};

export default TransactionList;
