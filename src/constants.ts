import { context } from "./types";

export const intialContext:context = {
   
    networkDetails : [{name:"kusama", icon:"kusama.svg"}],
    setNetworkResponseInfo : ():void=>{
        throw new Error('setContext function must be overridden');
    },
    isLoading :true
}