import React, { useState } from 'react'

function TransactionItem() {
  const [state] = useContext(WalletContext)
  let { wallets, currentWalletID, currentTransaction } = state

  return (
    <div>
      <tr>
        <th>id </th> <td> currentTransaction.transactionValue</td>
        <td> currentTransaction.type </td>
        <td>currentTransaction. transactionNotes</td>
        <td> currentTransaction.transactionTags </td>
      </tr>
    </div>
  )
}

export default TransactionItem
