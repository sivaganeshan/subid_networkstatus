import { useContext , useEffect} from "react";
import { NetworkContext } from "../NetworkContext";
import { getAllNetworks, getNetworkStatus } from "../httpHelper";


const NetworkEle :React.FC = () =>{

    let {networkDetails, setNetworkResponseInfo }= useContext(NetworkContext);

    useEffect(()=>{
        async function getRequiredDetails(){
          let networkInfo = await getAllNetworks();
          console.log("NetworkDetails : " ,networkInfo);
          //setNetworkResponseInfo({networkDetails:networkInfo , isLoading:false , setNetworkResponseInfo:():void=>{}});
  
           let kusamaNetworkStatus = await getNetworkStatus("kusama");
           console.log("Kusama network status : ", kusamaNetworkStatus);
           let index = networkInfo.findIndex(item=> item.name === "Kusama");
           console.log("Kusama network status and index : ", kusamaNetworkStatus, index);
           networkInfo[index].connectedStatus = kusamaNetworkStatus;
           setNetworkResponseInfo({networkDetails:networkInfo , isLoading:false , setNetworkResponseInfo:():void=>{}});
        //   console.log("Network status : ", kusamaNetworkStatus);
  
        }
        getRequiredDetails();
      },[]);

    return(
        <div>
            {networkDetails && networkDetails.map((item)=>(
                <ul key={item.name}>
                    {"Name : "+item.name + " Connected Status : " +item.connectedStatus}
                </ul>
            ))}
        </div>
    )
};

export default NetworkEle;
