import React from 'react'
import TransactionForm from './TransactionForm'
import TransactionsList from './TransactionsList'
import WalletList from './walletList'
import WalletInformation from './walletInformation'
function WalletPage() {
  return (
    <div className='flex flex-grow bg-secondary text-primary'>
      <WalletList />
      <div className='h-full w-4/5'>
        <div className='flex h-1/3 w-full'>
          <WalletInformation />
          <TransactionForm />
        </div>
        <TransactionsList />
      </div>
    </div>
  )
}

export default WalletPage
