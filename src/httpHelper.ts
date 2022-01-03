import { networkInfo } from "./types";

export const getAllNetworks= async(): Promise< networkInfo[]> =>{
    
    try{
        let uri = "https://app.subsocial.network/subid/api/v1/chains/properties";
        let response = await (await fetch(uri)).json();
        let networkDetails: networkInfo[] = [];
        for (const [, value] of Object.entries(response)){
            networkDetails.push(value as networkInfo);
        }
        return networkDetails;
    }
    catch(ex:any){
        console.error("Error in get All Networks : ", ex.message);
        throw ex.message;
    }
}

export const getNetworkStatus = async(networkName:string):Promise<boolean> => {
    try{
        let uri = "https://app.subsocial.network/subid/api/v1/check/";
        let response = await (await fetch(uri+networkName)).text() === 'true';
        return response;
    }
    catch(ex:any){
        console.error("Error in get All Networks : ", ex.message);
        throw ex.message;
    }

}