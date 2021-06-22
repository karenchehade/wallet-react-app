import React, { useContext, useState } from 'react'
import TransactionsList from './TransactionsList'
import { WalletContext } from '../../StateProvider'

function Transaction() {
  const [state, dispatch] = useContext(WalletContext)
  return (
    <>
      <TransactionsList />
    </>
  )
}

export default Transaction
