import React from "react";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Rotas from "./routes";
import Header from "./components/Header/Header";

export default function App() {

  return (

    <BrowserRouter>
      <Header />
      <Rotas />
    </BrowserRouter>
  )
}