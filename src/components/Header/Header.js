import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import "../Header/header.css";

export default function Header() {

    const [pesquisa, setPesquisa] = useState("");

    return (
        <div className="headerContainer">
            <div className="aboveHeader">
                <text className="textAbove">SOS Unipet: <b>0800 000 0000</b></text>
                <text className="textAbove2">Orientação em Saúde 24 horas: <b>0800 000 0000</b></text>
                <Link className="linkAbove">Mais telefones úteis</Link>
                <div className="searchContainer">
                    <input
                        className="pesquisa"
                        type="text"
                        value={pesquisa}
                        placeholder="O que procura?"
                        onChange={(e) => setPesquisa(e.target.value)}
                    />
                    <FaSearch className="searchIcon" />
                </div>
            </div>
            <div className="belowHeader">
                <h2>texto</h2>
            </div>
        </div>
    )
}