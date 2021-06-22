import React, { useContext } from 'react'
import { WalletContext } from '../../StateProvider'

function TransactionsList() {
  const [state, dispatch] = useContext(WalletContext)
  const { wallets, activeWalletID } = state

  const currentWallet = wallets.find((wallet) => {
    return wallet.id === activeWalletID
  })
  console.log(currentWallet.transactionList)
  return (
    <div>
      {/* <table>
        <tr> */}
      {/* <th>ID</th> */}
      {/* <th>Transfer Type</th>
          <th>Amount</th>
          <th>Tag</th>
        </tr> */}

      {currentWallet.transactionList &&
        currentWallet.transactionList.map((transaction) => {
          ;<h1>
            <h2>New</h2>
            <h2>{transaction.type}</h2>
            <h2>{transaction.transactionValue}</h2>
            <h2> {transaction.transactionTags}</h2>
          </h1>
        })}
      {/* </table> */}
    </div>
  )
}

export default TransactionsList
