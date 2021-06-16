import React, { useState } from "react";
import WalletForm from "./createWalletForm";

function NoWalletsErrorPage() {
  const [showForm, SetShowForm] = useState(false);

  function createWallet() {
    SetShowForm(true);
  }

  return (
    <div className="text-center">
      <h1>TRUST WALLET</h1>
      <h2>OOops</h2>
      <h4>You have no Wallets... start by creating one</h4>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
        onClick={createWallet}
      >
        Create form
      </button>
      {showForm && <WalletForm />}
    </div>
  );
}

export default NoWalletsErrorPage;
