import { Link } from 'react-router-dom';

const Transaction = ({transaction, index}) => {
    return (
        <div>
             <li>
            <Link to={`/transactions/${index}`}>{ transaction.name }</Link>
        </li>
        </div>
    )
}

export default Transaction
