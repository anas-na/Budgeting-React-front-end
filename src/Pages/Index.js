import Transactions from '../Components/Transactions'
import { useState, useEffect } from 'react'
const Index = ({ transactions }) => {
    const [total, setTotal] = useState(0)
    

    useEffect(() => {
        const reducer = async () => {
            const transactionsAmounts = transactions.map(transaction => {
                return transaction.amount
            });
            const result = (sum, currentValue) => {
                return sum + currentValue
            }
            const sumOfTransactions = transactionsAmounts.reduce(result, 0);
            setTotal(sumOfTransactions)
        };
        reducer();
    }, [transactions])
    return (
        <div>
            <h1>Bank Account Total Amount: {total} </h1>

            <Transactions  transactions={transactions}/>
        </div>
    )
}

export default Index;