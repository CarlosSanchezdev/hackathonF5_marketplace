import * as React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Cards from "../pages/Cards";
import ViewCard from "../pages/ViewCard";
import Fav from "../pages/Fav";





const Rutas = () => {
    return (
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/Cards" element={<Cards/>} />
            <Route path="/ViewCard" element={<ViewCard />} />
            <Route path="/Fav" element={<Fav />} />
           
           
        </Routes> 
     );
}
export default Rutas     