import { networkInfo } from "./types";
import {getAllNetworkBaseUri, getNetworkStatusUri} from "./constants";

export const getAllNetworks= async(): Promise< networkInfo[]> =>{
    
    try{
        let response = await (await fetch(getAllNetworkBaseUri)).json();
        let networkDetails: networkInfo[] = [];
        for (const [key, value] of Object.entries(response)){
            let netWorkValue = value as networkInfo;
            netWorkValue.networkName=key;
            if((netWorkValue.tokenDecimals && netWorkValue.tokenDecimals?.length >0) && (netWorkValue.tokenSymbol && netWorkValue.tokenSymbol?.length > 0)){
                networkDetails.push(value as networkInfo);
            }
        }
        return networkDetails;
    }
    catch(ex:any){
        console.error("Error in get All Networks : ", ex.message);
        throw ex.message;
    }
}

export const getNetworkStatus = async(networkName:string):Promise<boolean|undefined> => {
    try{

        let response = await (await fetch(getNetworkStatusUri+networkName)).text() === 'true';
        return response;
    }
    catch(ex:any){
        console.error("Error in getNetworkStatus : ", networkName,  ex.message);
    }
    return undefined;
}
