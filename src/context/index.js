import { createContext, useContext, useReducer } from 'react';

import { reducer, initialState } from '../reducer';

export const StoreContext = createContext();

export const StoreContextProvider = (props) => {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);

export default StoreContextProvider;
