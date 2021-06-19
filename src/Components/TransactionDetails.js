import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

import { apiURL } from "../Util/apiURL";
const API = apiURL();

const TransactionDetails = ({ deleteTransaction }) => {
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const res = await axios.get(`${API}/transactions/${index}`);
        console.log(res);
        setTransaction(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTransaction();
  }, [index]);

  const handleDelete = () => {
    deleteTransaction(index);
    history.push("/transactions");
  };
  return (
    <div >
      <div className="d-flex justify-content-around">
      <Link to={`/transactions`}>
        <button type="button" class="btn btn-primary btn-sm">Back</button>
      </Link>
      {/* <Link>
        <button to={`/transactions/${index}/edit`}>Edit</button>
      </Link> */}
      <button type="button" class="btn btn-primary btn-sm" onClick={handleDelete}>Delete</button>
      </div>
      <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>Date</th>
            <th>Transaction </th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{transaction.date}</th>
            <td>
              {transaction.name}
            </td>
            <td>{transaction.amount}</td>
          </tr>
        </tbody>
      </table>
      </div>
      
    </div>
  );
};

export default TransactionDetails;
