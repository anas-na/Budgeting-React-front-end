import Transactions from '../Components/Transactions'
const Index = ({ transactions }) => {
    return (
        <div>
            <h2>Index</h2>
            <Transactions  transactions={transactions}/>
        </div>
    )
}

export default Index;