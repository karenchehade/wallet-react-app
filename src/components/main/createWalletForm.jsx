import React, { useContext, useState } from "react";
import { WalletContext } from "../../StateProvider";
import moment from "moment";

function CreateWalletForm() {
  const [state, dispatch] = useContext(WalletContext);

  function createWallet(e) {
    
    const walletId = Math.floor(new Date()/1000)
    const wallet ={
    name: e.target.name.value,
    balance: e.target.balance.value,
    currency: e.target.currency.value,
    description: e.target.desc.value,
    transactionList: [],
    id: walletId,
    }
    console.log(wallet);
    dispatch({
       type: 'SET_WALLETID',
      id: walletId,
    });
    dispatch({
      type: 'SET_WALLETS',
      value: [ ...state.wallets , wallet],
     
    });
     
   
   e.preventDefault()
  }

  return (
    <>
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            {/* the modal start her */}
            <div className="bg-primary p-4 sm:p-5 text-secondary">
              <form onSubmit={(e)=>{
                createWallet(e)}}>
                {/* Header */}
                <div className="sm:flex sm:content-center">
                  <div className="flex w-full algin-center justify-center">
                    <h1 className="text-center text-2xl font-mono font-semibold">
                      Create A new Wallet
                    </h1>
                  </div>
                </div>
                {/* Get Name and Balance Form */}
                <div>
                  {/* Get Name Form */}
                  <div className="col-span-6 sm:col-span-3 w-full sm:my-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      First name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="wallet-name"
                      placeholder="Enter the Wallet name"
                      className="mt-1 py-1 px-2 block w-full shadow-sm sm:text-sm border bg-primary border-secondary rounded-xl"
                      required
                    />
                  </div>
                  {/* Get Balance Form */}
                  <div className="col-span-6 sm:col-span-3 w-full">
                    <label
                      htmlFor="balance"
                      className="block text-sm font-medium"
                    >
                      Balance
                    </label>
                    <input
                      type="number"
                      name="balance"
                      id="wallet-balance"
                      placeholder="Enter your wallet balance"
                      className="mt-1 py-1 px-2 block w-full shadow-sm sm:text-sm border bg-primary border-secondary rounded-xl"
                      required
                    />
                  </div>
                </div>
                {/* get currency radio buttons */}
                <div className="sm:flex sm:items-start my-2">
                  <div className="col-span-6 sm:col-span-3 ">
                    {/* Title */}
                    <label
                      htmlFor="Currency"
                      
                      className="block text-sm font-medium"
                    >
                      Currency
                    </label>
                    {/* radios */}
                    <div className="mt-2">
                      {/* Dollar radio */}
                      <div className="flex items-center">
                        <input
                          name="currency"
                          htmlFor="dollars"
                          value="dollars"
                          type="radio"
                          className="focus:ring-secondary bg-primary h-4 w-4 text-secondary border-secondary mt-1 block shadow-sm sm:text-sm"
                         
                          required
                        />
                        <label
                          htmlFor="dollars"
                          className="ml-3 block text-sm font-medium"
                        >
                          Dollars
                        </label>
                      </div>
                      {/* LBP radio */}
                      <div className="flex items-center">
                        <input
                          name="currency"
                          htmlFor="LBP"
                          value="LBP"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 mt-1 block shadow-sm sm:text-sm"
                         
                          required
                        />
                        <label
                          htmlFor="LBP"
                          className="ml-3 block text-sm font-medium"
                        >
                          Lebanese Pound
                        </label>
                      </div>
                      {/* BitCoin radio */}
                      <div className="flex items-center">
                        <input
                          name="currency"
                          htmlFor="BitCoin"
                          value="BitCoin"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 mt-1 block shadow-sm sm:text-sm"
                          
                          required
                        />
                        <label
                          htmlFor="BitCoin"
                          className="ml-3 block text-sm font-medium"
                        >
                          BitCoin
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Description TextArea*/}
                <div className="sm:flex sm:content-center">
                  <div className=" w-full sm:content-center sm:justify-items-center">
                    <label
                      htmlFor="Descrition"
                      className="block text-sm font-medium"
                    >
                      Description
                    </label>
                    <textarea
                      name="desc"
                      className="mt-1 py-1 px-2 block w-full shadow-sm sm:text-sm border bg-primary border-secondary rounded-xl"
                      rows="4"
                      
                      required
                    ></textarea>
                  </div>
                </div>
                {/* footer*/}
                <div className="sm:flex sm:content-center">
                  <div className="mt-3 w-full sm:content-center sm:justify-items-center">
                    <button
                      type="submit"
                      className="w-full bg-transparent hover:bg-blue-500 text-secondary font-bold text-xl font-mono hover:text-blue-500 py-2 px-4 border border-secondary rounded-full"
                    >
                      Create Wallet
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateWalletForm;
