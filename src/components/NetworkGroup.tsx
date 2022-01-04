import { useContext , useEffect} from "react";
import { NetworkContext } from "../NetworkContext";
import { getAllNetworks, getNetworkStatus } from "../httpHelper";
import Loading from "./Loading";
import {intialContext} from "../constants";
import NetworkElement from "./NetworkElement";
import NetworkEleWrapper from "../styles/NetworkEle.styles";
import HeaderWrapper from "../styles/Header.styles";
import Header from "./Header";


const NetworkGroup :React.FC = () =>{

    let {isLoading, setNetworkResponseInfo }= useContext(NetworkContext);

    useEffect(()=>{
        async function getRequiredDetails(){
          let networkInfo = await getAllNetworks();
          setNetworkResponseInfo({networkDetails:networkInfo, isLoading:false , setNetworkResponseInfo:():void=>{}});
          //let updateNetworkinfo = ...networkInfo;
          networkInfo.map(async (network) =>{
              if(network.networkName){
                let networkStatus = await getNetworkStatus(network.networkName);
                network.connectedStatus = networkStatus;
              }
              setNetworkResponseInfo({networkDetails:networkInfo, isLoading:false , setNetworkResponseInfo:():void=>{}});
          })
        }
        getRequiredDetails();

        const callOncefiveMinutes = setInterval(()=>{
            console.log("setinterval called");
            setNetworkResponseInfo({networkDetails:intialContext.networkDetails , isLoading:true , setNetworkResponseInfo:():void=>{}});
            getRequiredDetails()
        },300000);

        return ()=> clearInterval(callOncefiveMinutes);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return(
        <div>
            {isLoading && <Loading />}
            {!isLoading && 
            <>
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>

            <NetworkEleWrapper>
                    <NetworkElement />
            </NetworkEleWrapper>
            </> }
        </div>
    )
};

export default NetworkGroup;
