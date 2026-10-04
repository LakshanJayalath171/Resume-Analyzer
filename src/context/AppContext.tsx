import {createContext, useContext} from 'react';
import axios from 'axios';


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:8000';


const AppContext = createContext()

export const AppProvider = ({children})=>{

    const value = {axios}

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
};