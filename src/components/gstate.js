import React from "react";
import {createDataStore} from "usedatastore"
//////////////////////////////////////
// The Datastore
//////////////////////////////////////

const initialState = {
  hello: "world",
};

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

export const [DataStore, useDataStore] = createDataStore(initialState,reducer)
