import { useContext, useEffect } from "react";
import { NetworkContext } from "../NetworkContext";
import { getAllNetworks, getNetworkStatus } from "../httpHelper";
import Loading from "./Loading";
import { intialContext } from "../constants";
import NetworkElement from "./NetworkElement";
import NetworkEleWrapper from "../styles/NetworkEle.styles";
import HeaderWrapper from "../styles/Header.styles";
import Header from "./Header";
import ErrorWrapper from "../styles/Error.styles";
import Error from "./Error"


const NetworkGroup: React.FC = () => {
  let { isLoading, setNetworkResponseInfo, isError } =
    useContext(NetworkContext);

  useEffect(() => {
    async function getRequiredDetails() {
      try {
        let networkInfo = await getAllNetworks();
        setNetworkResponseInfo({
          networkDetails: networkInfo,
          isLoading: false,
          isError: false,
          setNetworkResponseInfo: (): void => {},
        });

        let networkInfoPromises = networkInfo.map(async (network) => {
          if (network.networkName) {
            let networkStatus = await getNetworkStatus(network.networkName);
            network.connectedStatus = networkStatus;
          }
          return network;
        });

        let networkDetailsInfo = (await Promise.all(networkInfoPromises)).filter(x=> !!x);

        setNetworkResponseInfo({
            networkDetails: networkDetailsInfo,
            isLoading: false,
            isError: false,
            setNetworkResponseInfo: (): void => {},
          });
      } catch (ex: any) {
        setNetworkResponseInfo({
          networkDetails: intialContext.networkDetails,
          isLoading: false,
          isError: true,
          setNetworkResponseInfo: (): void => {},
        });
      }
    }
    getRequiredDetails();

    const callOncefiveMinutes = setInterval(() => {
      console.log("setinterval called");
      setNetworkResponseInfo({
        networkDetails: intialContext.networkDetails,
        isError: false,
        isLoading: true,
        setNetworkResponseInfo: (): void => {},
      });
      getRequiredDetails();
    }, 300000);

    return () => clearInterval(callOncefiveMinutes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <>
    <div>
      {isLoading && <Loading />}
      {isError && 
      (<>
        <ErrorWrapper>
            <Error />
        </ErrorWrapper>
      </>)}
      {!isLoading && !isError && (
        <>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>

          <NetworkEleWrapper>
            <NetworkElement />
          </NetworkEleWrapper>
        </>
      )}
    </div>
    
    </>
  );
};

export default NetworkGroup;
