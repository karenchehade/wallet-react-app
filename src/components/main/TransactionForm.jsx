import React, { useContext, useState } from 'react'
import { WalletContext } from '../../StateProvider'

function TransactionForm() {
  const [state, dispatch] = useContext(WalletContext)
  const [transaction, setTransaction] = useState({
    transactionValue: '',
    type: '',
    transactionNotes: '',
    transactionTags: '',
  })

  function addTransaction() {
    // let activeWallet = state.wallets.filter((w) => (w.id = state.activeWalletID))
    // dispatch({ type : 'SET_WALLETS' , value : })
    dispatch({
      type: 'SET_TRANSLIST',
      value: transaction,
    })
  }
  return (
    <>
      <form>
        {' '}
        {/* Make Transaction Field */} <h2> Make a Transaction </h2>{' '}
        <label for='transactionValue'> Enter Transaction Value </label>{' '}
        <input
          type='number'
          id='transactionValue'
          name='transactionValue'
          onChange={(e) =>
            setTransaction({ ...transaction, transactionValue: e.target.value })
          }
        />{' '}
        {/* Income and Expense Buttons */}{' '}
        <input
          type='radio'
          id='incomeBtn'
          name='income'
          value='income'
          onClick={(e) =>
            setTransaction({ ...transaction, type: e.target.value })
          }
        />
        <label for='income'> Income </label>{' '}
        <input
          type='radio'
          id='expenseBtn'
          name='expense'
          value='expense'
          onClick={(e) =>
            setTransaction({
              ...transaction,
              type: e.target.value,
            })
          }
        />
        <label for='expense'> Expense </label>
        {/* Transaction Notes */}{' '}
        <label for='transactionNotes'> Transaction Notes </label>{' '}
        <input
          type='text'
          id='transactionNotes'
          name='transactionNotes'
          onChange={(e) =>
            setTransaction({ ...transaction, transactionNotes: e.target.value })
          }
        />{' '}
        {/* Transaction Tags */}{' '}
        <label for='transactionTags'> Transaction Tags </label>{' '}
        <input
          type='text'
          id='transactionTags'
          name='transactionTags'
          onChange={(e) =>
            setTransaction({ ...transaction, transactionTags: e.target.value })
          }
        />{' '}
        {/* Add Transaction Button */}{' '}
        <button
          type='button'
          onClick={() => {
            addTransaction()
          }}
        >
          {' '}
          Add Transaction{' '}
        </button>{' '}
      </form>{' '}
    </>
  )
}

export default TransactionForm
