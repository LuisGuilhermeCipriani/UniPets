import React from "react";
import { BrowserRouter } from "react-router-dom";

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