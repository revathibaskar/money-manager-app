import './index.css'

const TransactionItem = props => {
  const {transactionDetail, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetail

  const onChangeList = () => {
    deleteTransaction(id)
  }
  return (
    <li className="card-list">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <button type="button" onClick={onChangeList} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
