import React, { useState } from "react";
import Slider from "react-slick";
import Imagem1 from "../../assets/Imagem1.png";
import Imagem2 from "../../assets/Imagem2.png";
import Imagem3 from "../../assets/Imagem3.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./home.css";

export default function Home() {

    const [settings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });

    const [imagens] = useState([
        Imagem1,
        Imagem2,
        Imagem3
    ]);

    return (
        <div className="containerHome">
            <Slider {...settings}>
                {imagens.map(function (url, index) {
                    return (
                        <div key={index}>
                            <img className="imgCarrossel" src={url} alt={`Slide ${index}`}/>
                        </div>
                    );
                })}
            </Slider>
        </div>
    )
}