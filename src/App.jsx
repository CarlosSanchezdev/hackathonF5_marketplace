import "./App.css";

import Routes from "./components/Routes/Routes";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
     <>
      <BrowserRouter>
      <Routes/>
      </BrowserRouter>
     </>
     
  
  );
}
export default App