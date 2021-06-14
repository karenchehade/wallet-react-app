import React, { useContext, useState } from 'react'
import { WalletContext } from '../../StateProvider'
import NoWallet from './noWalletsErrorPage'
import Wallet from './walletPage'
import WalletForm from './createWalletForm'
import TransForm from './TransactionForm'

function Main() {
  // const [state, dispatch] = useContext(WalletContext)
  // const { wallets, currentWalletID } = state
  // return <>{wallets === [] ? <NoWallet /> : <Wallet />}</>

  return (
    <>
      {/* <WalletForm /> */}
      <TransForm />
    </>
  )
}

export default Main
