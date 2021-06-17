import React, { useContext, useState } from "react";
import { WalletContext } from "../../StateProvider";
import moment from "moment";

function CreateWalletForm() {
  const [, dispatch] = useContext(WalletContext);
  const [wallet, setWallet] = useState({
    name: "",
    balance: 0,
    currency: "",
    description: "",
    transactionList: [],
    id: "",
  });

  function createWallet() {
    setWallet();
    dispatch({
      type: "SET_WALLET",
      value: { ...wallet, id: moment().format() },
    });
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
            <div className="bg-white p-4 sm:p-5 text-black">
              {/* Header */}
              <div className="sm:flex sm:content-center">
                <div className="m-3 w-full sm:mt-0 sm:ml-4 sm:content-center">
                  <h1 className="text-center">Create A new Wallet</h1>
                </div>
              </div>
              {/* Get Name and Balance Form */}
              <div>
                {/* Get Name Form */}
                <div className="col-span-6 sm:col-span-3 w-full sm:my-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter the Wallet name"
                    className="mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-black"
                    onChange={(e) =>
                      setWallet({ ...wallet, name: e.target.value })
                    }
                  />
                </div>
                {/* Get Balance Form */}
                <div className="col-span-6 sm:col-span-3 w-full">
                  <label
                    htmlFor="balance"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Balance
                  </label>
                  <input
                    type="number"
                    name="balance"
                    id="balance"
                    placeholder="Enter your wallet balance"
                    className="mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-black"
                    onChange={(e) =>
                      setWallet({ ...wallet, balance: e.target.value })
                    }
                  />
                </div>
              </div>
              {/* get currency radio buttons */}
              <div className="sm:flex sm:items-start my-2">
                <div className="col-span-6 sm:col-span-3 ">
                  {/* Title */}
                  <label
                    htmlFor="Currency"
                    className="block text-sm font-medium text-gray-700"
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
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 mt-1 block shadow-sm sm:text-sm"
                        onChange={(e) =>
                          setWallet({ ...wallet, currency: e.target.value })
                        }
                      />
                      <label
                        htmlFor="dollars"
                        className="ml-3 block text-sm font-medium text-gray-700"
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
                        onChange={(e) =>
                          setWallet({ ...wallet, currency: e.target.value })
                        }
                      />
                      <label
                        htmlFor="LBP"
                        className="ml-3 block text-sm font-medium text-gray-700"
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
                        onChange={(e) =>
                          setWallet({ ...wallet, currency: e.target.value })
                        }
                      />
                      <label
                        htmlFor="BitCoin"
                        className="ml-3 block text-sm font-medium text-gray-700"
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
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    rows="4"
                    onChange={(e) =>
                      setWallet({ ...wallet, description: e.target.value })
                    }
                  ></textarea>
                </div>
              </div>
              {/* footer*/}
              <div className="sm:flex sm:content-center">
                <div className="mt-3 w-full sm:content-center sm:justify-items-center">
                  <button
                    onClick={createWallet}
                    className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
                  >
                    Create Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateWalletForm;
