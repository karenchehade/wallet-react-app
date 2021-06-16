import React, { createContext, useReducer } from 'react'

export const WalletContext = createContext()

const initialState = {
  wallets: [],
  activeWalletID: '',
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_WALLET':
      return { ...state, wallets: [...state.wallets, action.value] }
    case 'SET_WALLETID':
      return { ...state, currentWalletID: action.value }
    case 'SET_TRANSLIST':
    // let activeWallet = state.wallets.find(
    //   (w) => w.id === state.activeWalletID
    // )
    // const newWallet = {
    //   ...activeWallet,
    //   transactionList: [...activeWallet.transactionList, action.value],
    // }
    // let newWallets = state.wallets.filter(
    //   (w) => w.id === state.activeWalletID
    // )
    // return { ...state, wallets: [...newWallets, newWallet] }
    default:
      return state
  }
}
export function StateProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <WalletContext.Provider value={[state, dispatch]}>
      {props.children}
    </WalletContext.Provider>
  )
}
