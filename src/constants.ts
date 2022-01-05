import { context } from "./types";

export const intialContext:context = {
   
    networkDetails : [{name:"kusama", icon:"kusama.svg", connectedStatus:undefined}, {name:"kusama", icon:"kusama.svg", connectedStatus:false}, {name:"kusama", icon:"kusama.svg", connectedStatus:true}],
    setNetworkResponseInfo : ():void=>{
        throw new Error('setContext function must be overridden');
    },
    isLoading :true,
    isError : false
}

export const iconBaseUri = "https://sub.id/images/";

export const getAllNetworkBaseUri = "https://app.subsocial.network/subid/api/v1/chains/properties";

export const getNetworkStatusUri = "https://app.subsocial.network/subid/api/v1/check/";

export const subidLogo = "https://sub.id/images/SubID-logo.svg";
