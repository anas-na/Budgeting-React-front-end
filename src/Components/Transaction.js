import { Link } from "react-router-dom";

const Transaction = ({ transaction, index }) => {
  return (
    // <div >
    //     <li className='transaction'>
    //         <div>
    //             {transaction.date}
    //         </div>
    //     <Link to={`/transactions/${index}`}>{ transaction.name }</Link>
    //         <div>{transaction.amount}</div>
    // </li>
    // </div>
    <div>
      <table className="table">
        <thead className="thead-dark">
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
              <Link to={`/transactions/${index}`}>{transaction.name}</Link>
            </td>
            <td>{transaction.amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
