import React, { useContext, useState } from 'react'
import TransactionForm from './TransactionForm'
import TransactionsList from '../transaction/TransactionsList'
import { WalletContext } from '../../StateProvider'
function WalletPage() {
  const [state, dispatch] = useContext(WalletContext)
  return (
    <>
      <TransactionForm />
      <TransactionsList />
    </>
  )
}

export default WalletPage
