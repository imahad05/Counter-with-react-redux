import { createStore } from "redux";

const INIT_VALUE = {
  counter: 0,
  privacy: false,
};

const reducer = (store = INIT_VALUE, action) => {
  console.log(action);
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return { ...store, counter: store.counter + action.payload.num };
  } else if (action.type === "SUBTRACT") {
    return { ...store, counter: store.counter - action.payload.num };
  } else if (action.type === "RELOAD") {
    return { ...store, counter: (store.counter = 0) };
  } else if (action.type === "PRIVACY") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
};

export const store = createStore(reducer);
