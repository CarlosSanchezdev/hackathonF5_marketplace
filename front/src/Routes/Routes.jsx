import * as React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Cards from "../pages/Cards";
import ViewCard from "../pages/ViewCard";
import Fav from "../pages/Fav";





const Rutas = ({card, setCard, handleClick, favourites}) => {
    return (
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/Cards" element={<Cards card={card} setCard={setCard}/> } />
            <Route path="/ViewCard" element={<ViewCard handleClick={handleClick} card={card} setCard={setCard}/>} />
            <Route path="/Fav" element={<Fav card={card} setCard={setCard} favourites={favourites}/>} />
        </Routes> 
     );
}
export default Rutas     