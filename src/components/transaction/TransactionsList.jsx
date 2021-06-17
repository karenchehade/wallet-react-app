import React, { useContext } from 'react'
import { WalletContext } from '../../StateProvider'

function TransactionsList() {
  const [state, dispatch] = useContext(WalletContext)
  const { wallets, activeWalletID } = state

  const currentWallet = wallets.find((wallet) => {
    return wallet.id === activeWalletID
  })

  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Transfer Type</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
        {currentWallet.transactionList.map((transaction) => {
          ;<tr>
            // <td> {transaction.id}</td>
            // <td>{transaction.type}</td>
            // <td>{transaction.amount}</td>
            // <td> {transaction.date}</td>
            <TransactionItem {transaction} />
          </tr>
        })}
      </table>
    </div>
  )
}

export default TransactionsList
