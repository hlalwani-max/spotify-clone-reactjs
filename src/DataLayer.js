import React, {createContext, useContext, useReducer} from 'react';
import { initialState } from './Reducer';

export const DataLayerContext = createContext()

export const DataLayer = ({intialState, reducer, children}) => (
    
    // Wrapping: we are wrapping childern here.
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);