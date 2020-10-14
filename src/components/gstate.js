import React, { useReducer } from "react";
//////////////////////////////////////
// The Global State
//////////////////////////////////////

const initialState = {
  hello: "world",
};

//////////////////////////////////////
// globalContext
//////////////////////////////////////
const GlobalContext = React.createContext(null);

//////////////////////////////////////
// The Reducer
//////////////////////////////////////
const reducer = (state, payload) => {
  switch (payload.action) {
    case "goodbye":
      return { ...state, hello: "goodbye" };
    default:
      return state;
  }
};

//////////////////////////////////////
// Global state component
//////////////////////////////////////
export const GlobalState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

//////////////////////////////////
//useGlobal hook for getting data from global state
//////////////////////////////////
export const useGlobal = () => {
  return React.useContext(GlobalContext);
};
