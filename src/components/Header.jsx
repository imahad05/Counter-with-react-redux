import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const counter = useSelector((store) => store.counter);
  const privacy = useSelector((store) => store.privacy);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);

  return (
    <section className="w-full">
      <div className="py-8 px-4 text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Counter with react-redux
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Current Value : {privacy ? "--" : <span>{counter}</span>}
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            +1
          </button>
          <button
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            -1
          </button>
          <button
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onClick={() => dispatch({ type: "RELOAD" })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 4V1L8 5l4 4V6c3.9 0 7 3.1 7 7 0 .7-.1 1.4-.3 2h2.1c.2-.6.2-1.3.2-2 0-5-4-9-9-9zm-9 7c0-.7.1-1.4.3-2H1.2c-.2.6-.2 1.3-.2 2 0 5 4 9 9 9v3l4-4-4-4v3c-3.9 0-7-3.1-7-7z" />
            </svg>
          </button>
          <button
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onClick={() => dispatch({ type: "PRIVACY" })}
          >
            {privacy ? "Show Value" : "Hide Value"}
          </button>
        </div>

        <div className="text-start md:w-1/4 mx-auto">
          <label
            for="helper-text"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            "Type any number, then click to add or subtract it from the current
            value."
          </label>
          <input
            type="number"
            id="helper-text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <div className="mt-4 flex gap-4 items-center justify-center">
            <button
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              onClick={() => {
                dispatch({
                  type: "ADD",
                  payload: { num: parseInt(inputValue) },
                });
                setInputValue(0);
              }}
            >
              Add
            </button>
            <button
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              onClick={() => {
                dispatch({
                  type: "SUBTRACT",
                  payload: { num: parseInt(inputValue) },
                });
                setInputValue(0);
              }}
            >
              Subtract
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
