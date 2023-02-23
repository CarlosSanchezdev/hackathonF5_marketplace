import "./App.css";
import Routes from "../src/Routes/Routes";
import { BrowserRouter } from 'react-router-dom';
import {useState} from 'react';


function App() {
  const [card, setCard] = useState(1);
  return (
     <>
      <BrowserRouter>
      <Routes card={card} setCard={setCard}/>
      </BrowserRouter>
     </>
     
  
  );
}
export default App
