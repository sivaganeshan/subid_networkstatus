import React, {useState, createContext} from "react";
import { context } from "./types";
import {intialContext} from "./constants";

export const NetworkContext =  createContext(intialContext);

export const NetWorkProvider :React.FC = props =>{

    const[networkResponseInfo, setNetworkResponseInfo] = useState<context>(intialContext);


    return (
        <NetworkContext.Provider value={{...networkResponseInfo,setNetworkResponseInfo}}>
            {props.children}
        </NetworkContext.Provider>
    );
    
}