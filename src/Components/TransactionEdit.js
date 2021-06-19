import { useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom"
import axios from "axios"

import { apiURL } from "../Util/apiURL";
const API = apiURL();

const TransactionEdit = ({ updateTransaction }, props) => {
    let history = useHistory();
    let { index } = useParams();
  const [transaction, setTransaction] = useState({
    from: "",
    date: "",
    name: "",
    amount: "",
  });
  const handleTextChange = (e) => {
    setTransaction({ ...transaction, [e.target.index]: e.target.value });
  };

  const handleNumber = (e) => {
    setTransaction({ ...transaction, amount: Number(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateTransaction(transaction,index);
    history.push(`/transactions/${index}`);
  };
    
  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const res = await axios.get(`${API}/transactions/${index}`);
        setTransaction(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTransaction();
  }, [index]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="date">Transaction Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="date"
          onChange={handleTextChange}
          placeholder="Transaction Date"
          required
              />
              
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          required
          value={transaction.name}
          placeholder="Name"
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          name="Amount"
          type="number"
          value={transaction.amount}
          placeholder="Amount"
          onChange={handleNumber}
        />

        <label htmlFor="daysSinceLastCrisis">From:</label>
        <input
          id="from"
          name="From"
          type="text"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="From"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default TransactionEdit;
