import "./App.css";
import Routes from "../src/Routes/Routes";
import { BrowserRouter } from 'react-router-dom';
import {useState} from 'react';


function App() {
  const [card, setCard] = useState(1);
  const [favourites, setFavourite] = useState (JSON.parse(localStorage.getItem("Favourites")) || [] )

  const handleClick = (item) => {
    const newPush = favourites;
    const exist = newPush.some(card => card.id === item.id);
    if(!exist){
      newPush.push(item)
      setFavourite(newPush)
      localStorage.setItem('Favourites', JSON.stringify(newPush))
    }
    
    console.info(item)
    
  }

  return (
     <>
      <BrowserRouter>
      <Routes favourites={favourites} handleClick={handleClick} card={card} setCard={setCard}/>
      </BrowserRouter>
     </>
     
  
  );
}
export default App
