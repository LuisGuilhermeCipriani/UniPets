import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

export default function Rotas(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}