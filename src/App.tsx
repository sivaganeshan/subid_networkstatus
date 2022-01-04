
import { CssBaseline } from "@mui/material";
import  NetworkGroup  from "./components/NetworkGroup";
import { NetWorkProvider } from "./NetworkContext";

function App() {
  return (
    <NetWorkProvider>
      <div className="App">
        <CssBaseline />
        <NetworkGroup></NetworkGroup>
      </div>
    </NetWorkProvider>
  );
}

export default App;
