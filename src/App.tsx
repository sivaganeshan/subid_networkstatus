
import  NetworkEle  from "./components/NetworkEle";
import { NetWorkProvider } from "./NetworkContext";

function App() {
  return (
    <NetWorkProvider>
      <div className="App">
        <h4>All Network Details</h4>
        <NetworkEle></NetworkEle>
      </div>
    </NetWorkProvider>
  );
}

export default App;
