import React, { useContext, useState } from "react";
import { WalletContext } from "../../StateProvider";
import NoWallet from "./noWalletsErrorPage";
import Wallet from "./walletPage";
import WalletForm from "./createWalletForm";
import TransForm from "./TransactionForm";

function Main() {
  const [state, dispatch] = useContext(WalletContext);
  const { wallets, currentWalletID } = state;
  return <>{wallets.length === 0 ? <NoWallet /> : <Wallet />}</>;
}

export default Main;
