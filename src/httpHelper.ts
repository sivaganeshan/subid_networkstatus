import { networkResponse } from "./types";

export const getAllNetworks= async(): Promise<networkResponse> =>{
    
    try{
        let uri:string = "https://app.subsocial.network/subid/api/v1/chains/properties";
        let response: networkResponse = await (await fetch(uri)).json() as networkResponse;
        return response;
    }
    catch(ex:any){
        console.error("Error in get All Networks : ", ex.message);
        throw ex.message;
    }
}

export const getNetworkStatus = async(networkName:string):Promise<boolean> => {
    try{
        let uri:string = "https://app.subsocial.network/subid/api/v1/check/";
        let response: boolean = await (await fetch(uri+networkName)).text() === 'true';
        return response;
    }
    catch(ex:any){
        console.error("Error in get All Networks : ", ex.message);
        throw ex.message;
    }

}