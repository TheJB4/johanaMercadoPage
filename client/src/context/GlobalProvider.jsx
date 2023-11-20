import React,{createContext,useContext,useState} from "react";

let GlobalContext = createContext()

const GlobalProvider = ({children}) => {
    const [globalState, setGlobalState] = useState({
        //Aqui van todas las propiedades globales
    })

    const updatedGlobalState = (newState) => {
        setGlobalState((prevState) => (
            {
                ...prevState,
                ...newState
            }
        ))
    }

    return (
        <GlobalContext.Provider value={{globalState,setGlobalState}}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export {GlobalProvider,useGlobalContext}