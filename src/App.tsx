import React, {useState, useEffect} from "react";
import { networkResponse } from "./types";
import { getAllNetworks, getNetworkStatus } from "./httpHelper";

function App() {

    const[networkResponse, setNetworkResponse] = useState<networkResponse |undefined>(undefined);

    useEffect(()=>{
      async function getRequiredDetails(){
        let NetworkDetails = await getAllNetworks();
        console.log("NetworkDetails : " ,NetworkDetails);
        setNetworkResponse(NetworkDetails);

        let kusamaNetworkStatus = await getNetworkStatus("kusama");
        console.log("Network status : ", kusamaNetworkStatus);

      }
      getRequiredDetails();
    },[]);

  return (
    <div className="App">
      <h4>All Network Details</h4>
      {networkResponse && Object.keys(networkResponse).map(item=>(<ul>{item}</ul>))}
    </div>
  );
}

export default App;
