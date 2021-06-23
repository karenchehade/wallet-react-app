import React, { useContext } from 'react'
import { WalletContext } from '../../StateProvider'

function TransactionsList() {
  const [state, dispatch] = useContext(WalletContext)
  const { wallets, activeWalletID } = state

  const currentWallet = wallets.find((wallet) => {
    return wallet.id === activeWalletID
  })
  // console.log(currentWallet)
  return (
    <div className='h-2/3 w-full overflow-auto m-2 p-2 shadow-lg rounded'>
      <table className='table-fixed w-full bg-white'>
        <thead className='w-full'>
          <tr className='w-full'>
            <th className='w-1/4'>ID</th>
            <th className='w-1/4'>Transfer Type</th>
            <th className='w-1/4'>Amount</th>
            <th className='w-1/4'>Tag</th>
          </tr>
        </thead>

        <tbody>
          {currentWallet.transactionList &&
            currentWallet.transactionList.map((transaction) => {
              return (
                <tr>
                  <td>New</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.transactionValue}</td>
                  <td> {transaction.transactionTags}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionsList
