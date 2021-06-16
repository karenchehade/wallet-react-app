import React, { createContext, useReducer } from "react";

export const WalletContext = createContext();

const initialState = {
  wallets: [],
  currentWalletID: "",
  currentTransaction: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_WALLET":
      return { ...state, wallets: [...state.wallets, action.value] };
    case "SET_WALLETS":
      return { ...state, wallets: action.value };
    case "SET_WALLETID":
      return { ...state, currentWalletID: action.value };
    case "SET_CURRENTTRANS":
      return { ...state, currentTransaction: action.value };
    default:
      return state;
  }
}
export function StateProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <WalletContext.Provider value={[state, dispatch]}>
      {props.children}
    </WalletContext.Provider>
  );
}
