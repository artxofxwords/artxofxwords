/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { userReducer, userData } from "./UserReducer";

const CTX = createContext();

export function ContextProvider ({ children }) {
  const [ state, dispatch ] = useReducer(userReducer, userData);

  function setUserData (userData) {
    dispatch({type: "SET_USERDATA", userData: userData});
  }

  const context = {
    userData: state,
    setUserData: setUserData
  }

  return (
    <CTX.Provider value={context}>
      {children}

    </CTX.Provider>
    
  )
}

export default CTX;