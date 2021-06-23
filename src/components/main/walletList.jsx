import React, { useContext, useState } from 'react'
import { WalletContext } from '../../StateProvider'

function WalletList() {
  const [state, dispatch] = useContext(WalletContext)
  const { wallets, activeWalletID } = state
  console.log(state.wallets)
  return (
    <div className='h-full w-1/5'>
      This is the wallet list
      {state.wallets.map((wallet) => {
        return <h1>Each Wallet Information</h1>
      })}
    </div>
  )
}

export default WalletList
