import React from 'react'

function navBar() {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-gray-500 p-2 shadow'>
      {/* Website logo */}
      <div className='flex items-center justify-between lg:w-auto w-full'>
        <img src='flying_money.png' alt='Flying Money' width='250' />
        {/* <img
          src='http://i.stack.imgur.com/SBv4T.gif'
          alt='this slowpoke moves'
          width='50'
          className='logo'
        /> */}

        <div className='flex items-center flex-shrink-0 text-gray-800 mr-10'>
          <span className='font-semibold text-white text-2xl'>
            وين راح معاشي
          </span>
        </div>
      </div>
      {/* search box */}
      <div className='flex justify-between lg:w-auto w-full'>
        <div className='flex items-center flex-shrink-0 text-gray-800 ml-10'>
          <input
            className='bg-white h-10 px-2 rounded-lg text-sm focus:outline-none'
            type='search'
            name='search'
            placeholder='Search'
          />
          <button
            type='submit'
            className='border-2 rounded-lg border-blue-500 text-blue-500 text-sm h-10 ml-2 px-2 py-1 text-center align-middle'
          >
            search
          </button>
        </div>
      </div>
    </nav>
  )
}

export default navBar
