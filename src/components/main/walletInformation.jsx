import React, { useContext, useState } from 'react'
import { WalletContext } from '../../StateProvider'

function WalletInformation() {
  const [state, dispatch] = useContext(WalletContext)
  const { wallets, activeWalletID } = state

  const currentWallet = wallets.find((wallet) => {
    return wallet.id === activeWalletID
  })
  // console.log(currentWallet)
  return (
    <div className='h-full w-1/2'>
      <h1>Wallet information</h1>
      <h3>
        Starting Balance: {currentWallet.balance}{' '}
        {currentWallet.currency.toUpperCase()}
      </h3>
      <h3>Wallet Name: {currentWallet.name}</h3>
      <h3>Wallet Description: {currentWallet.description}</h3>
    </div>
  )
}

export default WalletInformation
