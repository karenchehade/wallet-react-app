import React from "react";

function navBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary p-1 shadow">
      {/* Website logo */}
      <div className="flex items-center justify-between">
        <img
          src="https://i.postimg.cc/hXSyVJCQ/flying-money.gif"
          border="0"
          alt="flying-money"
          // className="logo"
          width="50"
          height="50"
        />
        <div className="flex items-center flex-shrink-0 text-gray-800">
          <span className="font-semibold text-white text-2xl text-center">
            <h1 className="text-center">وين راح معاشي</h1>
          </span>
        </div>
      </div>
      {/* search box */}
      <div className="flex justify-between">
        <div className="flex items-center flex-shrink- ml-10">
          <input
            className="bg-white h-10 px-2 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button
            type="submit"
            className="border-2 rounded-lg border-secondary text-secondary group hover:border-blue-500 hover:text-blue-500 text-sm h-10 ml-2 px-2 py-1 text-center align-middle"
          >
            search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default navBar;
