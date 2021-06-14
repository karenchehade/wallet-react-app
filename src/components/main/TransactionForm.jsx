import React, { useContext, useState } from 'react'
import { WalletContext } from '../../StateProvider'

function TransactionForm() {
  const [, dispatch] = useContext(WalletContext)
  const [transaction, setTransaction] = useState({
    transactionValue: '',
    type: 'income',
    transactionNotes: '',
    transactionTags: '',
  })

  function addTransaction() {
    dispatch({
      type: 'SET_CURRENTTRANS',
      value: transaction,
    })
  }
  return (
    <>
      <form>
        {' '}
        {/* Make Transaction Field */} <h2> Make a Transaction </h2>{' '}
        <label for='transactionValue'> Enter Transaction Value </label>{' '}
        <input type='number' id='transactionValue' name='transactionValue' />{' '}
        {/* Income and Expense Buttons */}{' '}
        <input type='radio' id='incomeBtn' name='income' value='income' />
        <label for='income'> Income </label>{' '}
        <input type='radio' id='expenseBtn' name='expense' value='expense' />
        <label for='expense'> Expense </label> {/ * Transaction Notes * /}{' '}
        <label for='transactionNotes'> Transaction Notes </label>{' '}
        <input type='text' id='transactionNotes' name='transactionNotes' />{' '}
        {/* Transaction Tags */}{' '}
        <label for='transactionTags'> Transaction Tags </label>{' '}
        <input type='text' id='transactionTags' name='transactionTags' />{' '}
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
