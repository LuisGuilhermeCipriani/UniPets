import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaCaretRight } from "react-icons/fa";

import "../Header/header.css";
import logo from "../../assets/Unipets.png";

export default function Header() {
    const [pesquisa, setPesquisa] = useState("");
    const [submenuAberto, setSubmenuAberto] = useState(null);

    return (
        <div className="headerContainer">
            <div className="aboveHeader">
                <div className="aboveLeft">
                    <span className="textAbove">
                        SOS Unipet: <b>0800 000 0000</b>
                    </span>
                    <span className="textAbove2">
                        Orientação em Saúde 24 horas: <b>0800 000 0000</b>
                    </span>
                    <Link className="linkAbove" to="#">
                        Mais telefones úteis
                    </Link>
                </div>

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
                <img className="logo" src={logo} alt="logo" />

                <nav className="menu">
                    <ul>
                        <li
                            onMouseEnter={() => setSubmenuAberto("A Unipets")}
                            onMouseLeave={() => setSubmenuAberto(null)}
                        >
                            A Unipets
                            {submenuAberto === "A Unipets" && (
                                <ul className="submenu">
                                    <li><FaCaretRight className="submenuIcon" />A Cooperativa</li>
                                    <li><FaCaretRight className="submenuIcon" />Missão, Visão e Valores</li>
                                    <li><FaCaretRight className="submenuIcon" />Código de Conduta</li>
                                    <li><FaCaretRight className="submenuIcon" />Diretoria e Conselhos</li>
                                    <li><FaCaretRight className="submenuIcon" />Portal TISS</li>
                                    <li><FaCaretRight className="submenuIcon" />Qualidade</li>
                                    <li><FaCaretRight className="submenuIcon" />Relatório de Gestão</li>
                                    <li><FaCaretRight className="submenuIcon" />Portal de Governança</li>
                                    <li><FaCaretRight className="submenuIcon" />Política de Sustentabilidade</li>
                                    <li><FaCaretRight className="submenuIcon" />Estatuto Social</li>
                                    <li><FaCaretRight className="submenuIcon" />Informações Financeiras</li>
                                    <li><FaCaretRight className="submenuIcon" />IDSS</li>
                                    <li><FaCaretRight className="submenuIcon" />Rol de Procedimentos</li>
                                </ul>
                            )}
                        </li>

                        <li
                            onMouseEnter={() => setSubmenuAberto("Produtos")}
                            onMouseLeave={() => setSubmenuAberto(null)}
                        >
                            Produtos
                            {submenuAberto === "Produtos" && (
                                <ul className="submenu">
                                    <li><FaCaretRight className="submenuIcon" />Unipets Premium</li>
                                    <li><FaCaretRight className="submenuIcon" />Unipets Pleno</li>
                                    <li><FaCaretRight className="submenuIcon" />Unipets Flex</li>
                                    <li><FaCaretRight className="submenuIcon" />Unipets Mix</li>
                                    <li><FaCaretRight className="submenuIcon" />Unipets Dental</li>
                                    <li><FaCaretRight className="submenuIcon" />FAQ (Dúvidas frequentes)</li>
                                </ul>
                            )}
                        </li>

                        <li
                            onMouseEnter={() => setSubmenuAberto("Benefícios e Diferenciais")}
                            onMouseLeave={() => setSubmenuAberto(null)}
                        >
                            Benefícios e <br /> Diferenciais
                            {submenuAberto === "Benefícios e Diferenciais" && (
                                <ul className="submenu">
                                    <li><FaCaretRight className="submenuIcon" />Benefícios</li>
                                    <li><FaCaretRight className="submenuIcon" />Estação Pet</li>
                                    <li><FaCaretRight className="submenuIcon" />Tire suas dúvidas sobre <br />Telemedicina</li>
                                </ul>
                            )}
                        </li>

                        <li
                            onMouseEnter={() => setSubmenuAberto("Clientes")}
                            onMouseLeave={() => setSubmenuAberto(null)}
                        >
                            Clientes
                            {submenuAberto === "Clientes" && (
                                <ul className="submenu">
                                    <li><FaCaretRight className="submenuIcon" />Espaço da Empresa</li>
                                    <li><FaCaretRight className="submenuIcon" />Espaço do Cliente</li>
                                    <li><FaCaretRight className="submenuIcon" />Reajuste Individual</li>
                                    <li><FaCaretRight className="submenuIcon" />Recomposição dos reajustes <br />suspensos em 2020</li>
                                    <li><FaCaretRight className="submenuIcon" />Gestão da Inadimplência</li>
                                    <li><FaCaretRight className="submenuIcon" />Movimentações Cadastrais - <br />Plano de Saúde</li>
                                    <li><FaCaretRight className="submenuIcon" />Movimentações Cadastrais - <br />Plano Odontológico</li>
                                    <li><FaCaretRight className="submenuIcon" />Consulta de Guias</li>
                                    <li><FaCaretRight className="submenuIcon" />Pesquisa de Satisfação do <br />Beneficiário</li>
                                </ul>
                            )}
                        </li>

                        <li>Serviços <br /> Próprios</li>
                        <li>Centro <br /> Unipets</li>

                        <li
                            onMouseEnter={() => setSubmenuAberto("Fale Conosco")}
                            onMouseLeave={() => setSubmenuAberto(null)}
                        >
                            Fale <br /> Conosco
                            {submenuAberto === "Fale Conosco" && (
                                <ul className="submenu">
                                    <li><FaCaretRight className="submenuIcon" />Serviço de Atendimento ao <br />Cliente (SAC)</li>
                                    <li><FaCaretRight className="submenuIcon" />Formulário de Contato</li>
                                    <li><FaCaretRight className="submenuIcon" />Chat On-line (Exclusivo para <br />deficientes auditivos e de fala)</li>
                                    <li><FaCaretRight className="submenuIcon" />Fornecedores</li>
                                    <li><FaCaretRight className="submenuIcon" />Ouvidoria</li>
                                    <li><FaCaretRight className="submenuIcon" />Urgências e Emergências</li>
                                    <li><FaCaretRight className="submenuIcon" />Orientação Sobre Saúde</li>
                                    <li><FaCaretRight className="submenuIcon" />Patrocínios</li>
                                </ul>
                            )}
                        </li>

                        <li>Acesso <br /> Restrito</li>

                        <li
                            onMouseEnter={() => setSubmenuAberto("Trabalhe Conosco")}
                            onMouseLeave={() => setSubmenuAberto(null)}
                        >
                            Trabalhe <br /> Conosco
                            {submenuAberto === "Trabalhe Conosco" && (
                                <ul className="submenu">
                                    <li><FaCaretRight className="submenuIcon" />Seja um Colaborador</li>
                                    <li><FaCaretRight className="submenuIcon" />Seja um Fornecedor</li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}