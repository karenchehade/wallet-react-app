import React, { useContext } from 'react'
import { AppContext } from '../../StateProvider'

function CreateWalletForm() {
  // const [state, dispatch] = useContext(AppContext)
  // const { wallets, currentWalletID } = state

  // wallet = {
  //   name,
  //   balance,
  //   currency,
  //   description,
  //   transaction list
  //   id
  // }

  // function createWallet() {
  //     const wallet ;
  //     if (wallet.length === 0) {
  //       dispatch({ type: "SET_WALLET", value: wallet});
  //     }
  // }

  return (
    <>
      <h1>Their is not Wallet</h1>

      <div
        class='fixed z-10 inset-0 overflow-y-auto'
        aria-labelledby='modal-title'
        role='dialog'
        aria-modal='true'
      >
        <div class='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <div
            class='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
            aria-hidden='true'
          ></div>

          <span
            class='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>

          <div class='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
            <div class='bg-white p-4 sm:p-5'>
              <div class='sm:flex sm:content-center'>
                <div class='m-3 text-center sm:mt-0 sm:ml-4 sm:text-left sm:content-center'>
                  <h1>Create A new Wallet</h1>
                </div>
              </div>
              <div class='sm:flex sm:items-start sm:m-2'>
                <div class='col-span-6 sm:col-span-3 w-full'>
                  <label
                    for='name'
                    class='block text-sm font-medium text-gray-700'
                  >
                    First name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Enter the Wallet name'
                    class='mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-black'
                  />
                </div>
                <div class='col-span-6 sm:col-span-3 w-full'>
                  <label
                    for='balance'
                    class='block text-sm font-medium text-gray-700'
                  >
                    Balance
                  </label>
                  <input
                    type='number'
                    name='balance'
                    id='balance'
                    placeholder='Enter your wallet balance'
                    class='mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-black'
                  />
                </div>
              </div>
              <div class='sm:flex sm:items-start'>
                <div class='col-span-6 sm:col-span-3'>
                  <fieldset>
                    <div>
                      <legend class='text-base font-medium text-gray-900'>
                        Choose your currency
                      </legend>
                    </div>
                    <div class='mt-4 space-y-4'>
                      <div class='flex items-center'>
                        <input
                          id='dollars'
                          name='dollars'
                          type='radio'
                          class='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                        />
                        <label
                          for='dollars'
                          class='ml-3 block text-sm font-medium text-gray-700'
                        >
                          Dollars
                        </label>
                      </div>
                      <div class='flex items-center'>
                        <input
                          id='LBP'
                          name='LBP'
                          type='radio'
                          class='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                        />
                        <label
                          for='LBP'
                          class='ml-3 block text-sm font-medium text-gray-700'
                        >
                          Lebanese Pound
                        </label>
                      </div>
                      <div class='flex items-center'>
                        <input
                          id='BitCoin'
                          name='BitCoin'
                          type='radio'
                          class='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                        />
                        <label
                          for='BitCoin'
                          class='ml-3 block text-sm font-medium text-gray-700'
                        >
                          BitCoin
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div>
    //   <div>
    //     <h5 id='exampleModalLabel'>Create new Wallet</h5>
    //     <button
    //       type='button'
    //       data-bs-dismiss='modal'
    //       aria-label='Close'
    //     ></button>
    //   </div>
    //   <div>
    //     <div>
    //       <label for='wallet-name'>Name</label>
    //       <div>
    //         <input type='text' id='wallet-name' />
    //       </div>
    //     </div>

    //     <div>
    //       <div>
    //         <label>Currency</label>
    //       </div>
    //       <div>
    //         <div>
    //           <input
    //             type='radio'
    //             id='currency-btc'
    //             name='currency'
    //             value='btc'
    //           />
    //           <label for='currency-btc'>Bitcoins (BTC)</label>
    //         </div>
    //         <div>
    //           <input type='radio' id='currency-eth' name='currency' />
    //           <label class='custom-control-label' for='currency-eth'>
    //             Ethereum (ETH)
    //           </label>
    //         </div>
    //         <div>
    //           <input type='radio' id='currency-usd' name='currency' />
    //           <label class='custom-control-label' for='currency-usd'>
    //             US Dollars ($)
    //           </label>
    //         </div>

    //         <div>
    //           <input type='radio' id='currency-lbp' name='currency' />
    //           <label class='custom-control-label' for='currency-lbp'>
    //             Lebanese Pound (LBP)
    //           </label>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <label for='wallet-balance'>Balance</label>
    //       <div>
    //         <input type='number' id='wallet-balance' min='0' />
    //       </div>
    //     </div>

    //     <div>
    //       <label for='wallet-desc'>Description</label>
    //       <div>
    //         <input type='text' id='wallet-desc' />
    //       </div>
    //     </div>
    //   </div>
    //   <div class='modal-footer'>
    //     <button type='button' id='close-btn'>
    //       Close
    //     </button>
    //     <button type='button' id='create-btn' onClick={{ createWallet }}>
    //       create wallet
    //     </button>
    //   </div>
    // </div>
  )
}

export default CreateWalletForm
