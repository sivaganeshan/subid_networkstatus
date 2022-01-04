import { context } from "./types";

export const intialContext:context = {
   
    networkDetails : [{name:"kusama", icon:"kusama.svg"}],
    setNetworkResponseInfo : ():void=>{
        throw new Error('setContext function must be overridden');
    },
    isLoading :true
}

export const iconBaseUri = "https://sub.id/images/";

export const getAllNetworkBaseUri = "https://app.subsocial.network/subid/api/v1/chains/properties";

export const getNetworkStatusUri = "https://app.subsocial.network/subid/api/v1/check/";

export const subidMobileLogo = "https://sub.id/images/SubID-logo-mobile.svg";

export const subidLogo = "https://sub.id/images/SubID-logo.svg";