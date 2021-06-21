import React, { createContext, useReducer } from "react";

export const WalletContext = createContext();

const initialState = {
  wallets: [],
  activeWalletID: "",
};

function reducer(state, action) {
  
  switch (action.type) {
    case "SET_WALLETID":
      return { ...state, activeWalletID: action.id };
    case "SET_TRANS":
      console.log(state);
      const activeWallet = state.wallets.find(w => w.id == action.value.walletID);
      activeWallet.transactionList.push(action.value.newTrans);
      return {...state,wallets:[
        ...state.wallets.filter((w) => w.id !== action.value.walletID),
        activeWallet,
      ]};
    case "SET_WALLETS":
      return { ...state, wallets: action.value };
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
