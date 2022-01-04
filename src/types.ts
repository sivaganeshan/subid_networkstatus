import {  Dispatch, SetStateAction } from 'react';

export type context = {
    networkDetails : networkInfo[],
    isLoading :boolean,
    isError:boolean,
    setNetworkResponseInfo: Dispatch<SetStateAction<context>>;
}

export type networkInfo = {
    name:string,
    icon:string,
    tokenSymbol?:string[],
    tokenDecimals?:number[],
    nativeToken?:  string,
    connectedStatus?: boolean,
    ss58Format?: number,
    networkName?:string
}

export type ConnectedStatus ={
    status: boolean|undefined
}





