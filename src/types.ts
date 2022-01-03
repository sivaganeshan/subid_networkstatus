export type networkResponse ={
    kusama: networkInfo
    polkadot: networkInfo
    centrifuge: networkInfo
    sora: networkInfo
    edgeware: networkInfo
    chainx: networkInfo
    unique: networkInfo
    nodle: networkInfo
    darwinia: networkInfo
    subsocial: networkInfo
    calamari: networkInfo
    altair: networkInfo
    basilisk: networkInfo
    parallel: networkInfo
    kilt: networkInfo
    polkasmith: networkInfo
    bifrost: networkInfo
    statemine: networkInfo
    genshiro: networkInfo
    integritee: networkInfo
    karura: networkInfo
    khala: networkInfo
    kintsugi: networkInfo
    mars: networkInfo
    moonriver: networkInfo
    sakura: networkInfo
    sherpax: networkInfo
    shiden: networkInfo
    picasso: networkInfo
    shadow: networkInfo
    bitCountry: networkInfo
    robonomics: networkInfo
    quartz: networkInfo
    zeitgeist: networkInfo
    moonbeam: networkInfo
    clover: networkInfo
    astar: networkInfo
    litentry: networkInfo
    manta: networkInfo
    subdao: networkInfo
    acala: networkInfo
    "darwinia-pokadot": networkInfo
    subGame: networkInfo
    efinity: networkInfo
    composable: networkInfo
    interlay: networkInfo
    centrifugePara: networkInfo

}
export type networkInfo = {
    name:string,
    icon:string,
    tokenSymbol?:string[],
    tokenDecimals?:number[],
    nativeToken?:  string,
    //ss58Format?: number
}
