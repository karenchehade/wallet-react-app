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
        <div className="flex flex-col flex-wrap justify-center align-middle text-center bg-secondary w-1/2 h-full text-primary">
          <div>
            <h1 className="text-4xl w-full font-semibold">
              Welcome to the E-Wallet
            </h1>
            <h2 className="text-3xl font-semibold font-mono mb-10">
              وين راح معاشي
            </h2>
            <h4 className="text-xl font-semibold font-mono">
              ! You have no Wallets... start by creating one !
            </h4>
            <button
              className="font-extrabold font-mono text-xl py-2 px-4 m-4 mt-1 border-4 border-primary text-primary group hover:border-blue-500 hover:text-blue-500 rounded-full"
              onClick={createWallet}
            >
              Create New Wallet
            </button>
            {showForm && <WalletForm />}
          </div>
        </div>
      </div>
    </>
  );
}

export default NoWalletsErrorPage;
