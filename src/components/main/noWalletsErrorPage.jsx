import React, { useState } from "react";
import WalletForm from "./createWalletForm";

function NoWalletsErrorPage() {
  const [showForm, SetShowForm] = useState(false);

  function createWallet() {
    SetShowForm(true);
  }

  return (
    <>
      <div className="flex flex-grow flex-wrap">
        <div className="flex flex-col bg-secondary w-1/2 h-full justify-center align-middle">
          <div className="flex justify-center">
            <img
              src="https://i.postimg.cc/YLzwrv2N/Slowpoke.gif"
              border="0"
              alt="Slowpoke"
              width="500"
              height="500"
            />
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-center align-middle text-center bg-secondary w-1/2 h-full text-white">
          <div>
            <h1 className="text-2xl w-full">Welcome to the E-Wallet</h1>
            <h2 className="text-xl">وين راح معاشي</h2>
            <h4>You have no Wallets... start by creating one</h4>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
              onClick={createWallet}
            >
              Create form
            </button>
            {showForm && <WalletForm />}
          </div>
        </div>
      </div>
      <div className="w-full h-3 bg-primary"></div>
    </>
  );
}

export default NoWalletsErrorPage;
