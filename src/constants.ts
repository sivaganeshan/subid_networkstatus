import { context } from "./types";

export const intialContext:context = {
    //networkDetails : {"kusama":{"ss58Format":2,"tokenDecimals":[12],"tokenSymbol":["KSM"],"icon":"kusama.svg","name":"Kusama"},"polkadot":{"ss58Format":0,"tokenDecimals":[10],"tokenSymbol":["DOT"],"icon":"polkadot.svg","name":"Polkadot"},"centrifuge":{"ss58Format":36,"tokenDecimals":[18],"tokenSymbol":["CFG"],"icon":"centrifuge.png","name":"Centrifuge"},"sora":{"ss58Format":69,"tokenDecimals":[18],"tokenSymbol":["XOR"],"icon":"sora-substrate.svg","name":"SORA"},"edgeware":{"ss58Format":7,"tokenDecimals":[18],"tokenSymbol":["EDG"],"icon":"edgeware-circle.svg","name":"Edgeware"},"chainx":{"ss58Format":44,"tokenDecimals":[8],"tokenSymbol":["PCX"],"icon":"chainx.svg","name":"ChainX"},"unique":{"ss58Format":42,"tokenDecimals":[15],"tokenSymbol":["testUNQ"],"icon":"unique.svg","name":"Unique testnet"},"nodle":{"ss58Format":37,"tokenDecimals":[11],"tokenSymbol":["NODL"],"icon":"nodle.svg","name":"Nodle"},"darwinia":{"ss58Format":18,"tokenDecimals":[9,9],"tokenSymbol":["RING","KTON"],"icon":"darwinia.png","name":"Darwinia"},"subsocial":{"ss58Format":28,"tokenDecimals":[11],"tokenSymbol":["SUB"],"icon":"subsocial.svg","name":"Subsocial"},"calamari":{"ss58Format":78,"tokenDecimals":[12],"tokenSymbol":["KMA"],"icon":"calamari.png","name":"Calamari"},"altair":{"ss58Format":136,"tokenDecimals":[18],"tokenSymbol":["AIR"],"icon":"altair.svg","name":"Altair"},"basilisk":{"ss58Format":10041,"tokenDecimals":[12],"tokenSymbol":["BSX"],"icon":"basilisk.png","name":"Basilisk"},"parallel":{"icon":"parallel.svg","name":"Parallel"},"kilt":{"ss58Format":38,"tokenDecimals":[15],"tokenSymbol":["KILT"],"icon":"kilt.png","name":"Kilt Spiritnet"},"polkasmith":{"icon":"polkasmith.svg","name":"PolkaSmith"},"bifrost":{"ss58Format":6,"tokenDecimals":[12],"tokenSymbol":["BNC"],"icon":"bifrost.svg","name":"Bifrost"},"statemine":{"ss58Format":2,"tokenDecimals":[12],"tokenSymbol":["KSM"],"icon":"statemine.svg","name":"Statemine"},"genshiro":{"icon":"genshiro.svg","name":"Genshiro"},"integritee":{"icon":"integritee.svg","name":"Integritee Network"},"karura":{"ss58Format":8,"tokenDecimals":[12,12,12,12,12,12,12,12,8],"tokenSymbol":["KAR","KUSD","KSM","LKSM","BNC","VSKSM","PHA","KINT","KBTC"],"icon":"karura.svg","name":"Karura"},"khala":{"ss58Format":30,"tokenDecimals":[12],"tokenSymbol":["PHA"],"icon":"khala.svg","name":"Khala"},"kintsugi":{"ss58Format":2092,"tokenDecimals":[10,8,10,12,8,12],"tokenSymbol":["DOT","INTERBTC","INTR","KSM","KBTC","KINT"],"icon":"kintsugi.png","name":"Kintsugi BTC","nativeToken":"KINT"},"mars":{"icon":"mars.png","name":"Mars"},"moonriver":{"ss58Format":1285,"tokenDecimals":[18],"tokenSymbol":["MOVR"],"icon":"moonriver.svg","name":"Moonriver"},"sakura":{"icon":"sakura.svg","name":"Sakura"},"sherpax":{"icon":"sherpax.svg","name":"SherpaX"},"shiden":{"ss58Format":5,"tokenDecimals":[18],"tokenSymbol":["SDN"],"icon":"shiden.png","name":"Shiden"},"picasso":{"icon":"picasso.png","name":"Picasso"},"shadow":{"icon":"shadow.svg","name":"Crust Shadow"},"bitCountry":{"icon":"bitcountry.svg","name":"Bit.Country Pioneer"},"robonomics":{"icon":"robonomics.svg","name":"Robonomics"},"quartz":{"ss58Format":255,"tokenDecimals":[18],"tokenSymbol":["QTZ"],"icon":"quartz.png","name":"QUARTZ by UNIQUE"},"zeitgeist":{"icon":"zeitgeist.png","name":"Zeitgeist"},"moonbeam":{"icon":"moonbeam.png","name":"Moonbeam"},"clover":{"icon":"clover.svg","name":"Clover Finance"},"astar":{"icon":"astar.png","name":"Astar"},"litentry":{"icon":"litentry.png","name":"Litentry"},"manta":{"icon":"manta.png","name":"Manta"},"subdao":{"icon":"subdao.png","name":"SubDAO"},"acala":{"ss58Format":10,"tokenDecimals":[12,12,10,10],"tokenSymbol":["ACA","AUSD","DOT","LDOT"],"icon":"acala.svg","name":"Acala"},"darwinia-pokadot":{"icon":"darwinia.png","name":"Darwinia"},"subGame":{"icon":"subgame.svg","name":"SubGame Gamma"},"efinity":{"icon":"efinity.svg","name":"Efinity"},"composable":{"icon":"composableFinance.png","name":"Composable Finance"},"interlay":{"icon":"interlay.svg","name":"Interlay"},"centrifugePara":{"icon":"centrifuge.png","name":"Centrifuge"}}
    networkDetails : [{name:"kusama", icon:"kusama.svg"}],
    setNetworkResponseInfo : ():void=>{
        throw new Error('setContext function must be overridden');
    },
    isLoading :true
}