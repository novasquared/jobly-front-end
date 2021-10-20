import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.css";

/** App for Jobly
 * 
 *  Props:
 *  - None
 * 
 *  State:
 *  - None
 * 
 *  App -> { Navigation, Routes }
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
