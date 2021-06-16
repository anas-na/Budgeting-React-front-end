import TransactionDetails from '../Components/TransactionDetails'
const Show = ({deletedTransaction}) => {
    return (
        <div>
            <h2>Show</h2>
            <TransactionDetails deletedTransaction={deletedTransaction} />
        </div>
    )
}

export default Show
