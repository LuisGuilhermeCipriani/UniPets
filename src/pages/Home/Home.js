import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./home.css";

import Image1 from "../../assets/Imagem1.png";
import Image2 from "../../assets/Imagem2.png";
import Image3 from "../../assets/Imagem3.png";
import Agenda from "../../assets/Agenda.png";
import Coracao from "../../assets/Coracao.png";
import Medico from "../../assets/Medico.png";
import Odontologia from "../../assets/Odontologia.png";
import Atendimento from "../../assets/Atendimento.png";
import Boleto from "../../assets/Boleto.png";
import BoletoDigital from "../../assets/BoletoDigital.png";
import Cliente from "../../assets/Cliente.png";
import Contatos from "../../assets/Contatos.png";
import Guia from "../../assets/Guia.png";
import Pagamento from "../../assets/Pagamento.png";
import Resolucao from "../../assets/Resolucao.png";
import Dica1 from "../../assets/Dica1.jpg";
import Dica2 from "../../assets/Dica2.jpg";
import Noticia1 from "../../assets/Noticia1.jpg";
import Noticia2 from "../../assets/Noticia2.jpg";
import Noticia3 from "../../assets/Noticia3.jpg";

const icons = [
    { img: Atendimento, text: "ATENDIMENTO VIA CHAT" },
    { img: Boleto, text: "2ª VIA DE BOLETO" },
    { img: BoletoDigital, text: "BOLETO DIGITAL UNIPETS" },
    { img: Cliente, text: "CLIENTE EMPRESARIAL" },
    { img: Contatos, text: "ATUALIZAÇÃO DE CONTATOS" },
    { img: Guia, text: "STATUS DE GUIA" },
    { img: Pagamento, text: "COMPROVANTE DE PAGAMENTO" },
    { img: Resolucao, text: "RESOLUÇÃO NORMATIVA" }
];

const visibleCount = 4;

export default function Home() {
    const [startIndex, setStartIndex] = useState(0);

    const [settings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });

    const images = [Image1, Image2, Image3];

    const getVisibleItems = () => {
        const visible = [];
        for (let i = 0; i < visibleCount; i++) {
            const index = (startIndex + i) % icons.length;
            visible.push(icons[index]);
        }
        return visible;
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % icons.length);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) =>
            (prevIndex - 1 + icons.length) % icons.length
        );
    };

    return (
        <div className="containerHome">
            <Slider {...settings}>
                {images.map((url, index) => (
                    <div key={index}>
                        <img className="imgCarrossel" src={url} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Slider>

            <div className="belowCarousel">
                <div className="fieldIten">
                    <img className="imgIten" src={Odontologia} alt="Unipets Dental" />
                    <p className="textIten">ACESSE AQUI O <br />GUIA UNIPETS <br />DENTAL</p>
                </div>
                <div className="fieldIten">
                    <img className="imgIten" src={Medico} alt="Guia Veterinário" />
                    <p className="textIten">ACESSE AQUI O <br />GUIA VETERINÁRIO</p>
                </div>
                <div className="fieldIten">
                    <img className="imgIten" src={Agenda} alt="Agenda" />
                    <p className="textIten">AGENDAMENTO E <br />RESULTADOS DE <br />EXAMES</p>
                </div>
                <div className="fieldIten">
                    <img className="imgIten" src={Coracao} alt="Quero ser cliente" />
                    <p className="textIten">QUERO SER CLIENTE</p>
                </div>
            </div>

            <div className="MainField">
                <div className="containerNavigation">
                    <div className="quickNavigation">
                        <div className="horizontalBar"></div>
                        <p className="textNavegation"><b>NAVEGAÇÃO RÁPIDA</b></p>
                        <div className="horizontalBar"></div>
                    </div>
                </div>

                <div className="carousel-container">
                    <FaChevronLeft className="iconsNavegation" onClick={handlePrev} />
                    <div className="carousel">
                        {getVisibleItems().map((item, index) => (
                            <div key={index} className="carousel-item">
                                <img className="carousel-icon" src={item.img} alt={item.text} />
                                <p className="carousel-text">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <FaChevronRight className="iconsNavegation" onClick={handleNext} />
                </div>

                <div className="containerNavigation">
                    <div className="quickNavigation">
                        <div className="horizontalBar"></div>
                        <p className="textNavegation"><b>CUIDAR BEM DO SEU AMIGUINHO. </b>ESSE É O PLANO</p>
                        <div className="horizontalBar"></div>
                    </div>
                </div>
            </div>

            <div className="tipsField">
                <div className="imgTips">
                    <div className="imgTip">
                        <img src={Dica1} alt="Dica 1" />
                        <img src={Dica2} alt="Dica 2" />
                    </div>
                </div>
                <div className="moreTips">
                    <div className="tip">
                        <p>VER TODAS AS DICAS</p>
                        <FaChevronRight />
                    </div>
                </div>
            </div>

            <div className="containerNavigation">
                <div className="quickNavigation">
                    <div className="horizontalBar"></div>
                    <p className="textNavegation"><b>CONHEÇA NOSSOS PLANOS</b></p>
                    <div className="horizontalBar"></div>
                </div>
            </div>

            <div className="plansField">
                <div className="squaresPlan">
                    <div className="squares">
                        <div className="square" style={{ backgroundColor: '#015d52' }}>
                            <div className="textSquare">
                                <div className="header">
                                    <span className="textPlan1">UNIPETS PLENO</span>
                                    <span className="textPlan2">(plano individual/familiar, empresarial e coletivo por adesão)</span>
                                </div>
                                <div className="footer">
                                    <p className="textPlan3">Um jeito especial de cuidar do seu amiguinho!</p>
                                </div>
                            </div>
                        </div>

                        <div className="square" style={{ backgroundColor: '#e01e53' }}>
                            <div className="textSquare">
                                <div className="header">
                                    <span className="textPlan1">UNIPETS FLEX</span>
                                    <span className="textPlan2">(plano individual/familiar, empresarial e coletivo por adesão)</span>
                                </div>
                                <div className="footer">
                                    <p className="textPlan3">Cobertura completa ou ambulatorial. Conheça!</p>
                                </div>
                            </div>
                        </div>

                        <div className="square" style={{ backgroundColor: '#196504' }}>
                            <div className="textSquare">
                                <div className="header">
                                    <span className="textPlan1">PLANO VETERINÁRIO ZONA DA MATA</span>
                                    <span className="textPlan2">(plano individual/familiar)</span>
                                </div>
                                <div className="footer">
                                    <p className="textPlan3">Mensalidade acessível, com acréscimo fixo apenas em internações</p>
                                </div>
                            </div>
                        </div>

                        <div className="square" style={{ backgroundColor: '#ea7832' }}>
                            <div className="textSquare">
                                <div className="header">
                                    <span className="textPlan1">UNIPETS PREMIUM</span>
                                    <span className="textPlan2">(plano individual/familiar, empresarial e coletivo por adesão)</span>
                                </div>
                                <div className="footer">
                                    <p className="textPlan3">Nosso plano estadual com o melhor custo-benefício</p>
                                </div>
                            </div>
                        </div>

                        <div className="square" style={{ backgroundColor: '#ce3d3d' }}>
                            <div className="textSquare">
                                <div className="header">
                                    <span className="textPlan1">UNIPETS DENTAL</span>
                                    <span className="textPlan2">(plano empresarial)</span>
                                </div>
                                <div className="footer">
                                    <p className="textPlan3">Conheça nossa assistência odontológica!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="moreTips">
                        <div className="opcoes">
                            <p>CONFIRA TODAS AS OPÇÕES AQUI</p>
                            <FaChevronRight />
                        </div>
                    </div>
                </div>
            </div>

            <div className="containerNavigation">
                <div className="quickNavigation">
                    <div className="horizontalBar"></div>
                    <p className="textNavegation"><b>NOTÍCIAS</b></p>
                    <div className="horizontalBar"></div>
                </div>
            </div>
            <div className="fieldNews">
                <div className="groupNews">
                    <div className="news">
                        <img className="imgNews" src={Noticia1} alt="Notícia" />
                        <div className="texts">
                            <p className="titleNews">Corrida Unipets reúne mais de 500 participantes</p>
                            <p className="textNews">Programação incluiu Circuito Saúde, com dezenas de oficinas gratuitas 
                                para toda a população abcdefghijklmnopqrstuvwxyz</p> <span className="more">Ver mais</span>
                        </div>
                    </div>
                    <div className="news">
                        <img className="imgNews" src={Noticia2} alt="Notícia" />
                        <div className="texts">
                            <p className="titleNews">Gincana Unipets bate recorde de inscritos, sendo a maior já realizada 
                                pela cooperativa</p>
                            <p className="textNews">Inscrições acabaram duas semanas antes do evento, alcançando marca histórica e reforça a...</p> <span className="more">Ver mais</span>
                        </div>
                    </div>
                    <div className="news">
                        <img className="imgNews" src={Noticia3} alt="Notícia" />
                        <div className="texts">
                            <p className="titleNews">Unipets promove "Cachorródromo", com vagas gratuitas para toda população</p>
                            <p className="textNews">Evento integra a programação do Circuito Saúde que, este ano, terá dois dias: 
                                7 e 8 de junho...</p> <span className="more">Ver mais</span>
                        </div>
                    </div>
                </div>
                <div className="moreTips">
                    <div className="tip">
                        <p>VER MAIS NOTÍCIAS</p>
                        <FaChevronRight />
                    </div>
                </div>
            </div>

        </div>
    );
}
