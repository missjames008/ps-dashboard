import React, { createContext, useReducer } from "react";
import AppReducer from "../app-reducer";

const initialState = {
  campaigns: [
    {
      id: 1,
      name: "Ishan Manandhar",
      location: "Kathmandu",
      designation: "Frontend Developer",
    },
    {
      id: 1,
      name: "Jocelyn James",
      location: "NYC",
      designation: "Frontend Developer",
    },
  ],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function removeCampaign(id) {
    dispatch({
      type: "REMOVE_CAMPAIGN",
      payload: id,
    });
  }

  function addCampaign(campaigns) {
    dispatch({
      type: "ADD_CAMPAIGNS",
      payload: campaigns,
    });
  }

  function editCampaign(campaigns) {
    dispatch({
      type: "EDIT_CAMPAIGN",
      payload: campaigns,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        campaigns: state.campaigns,
        removeCampaign,
        addCampaign,
        editCampaign,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
