import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { faIdBadge, faGamepad, faUserFriends, faChartPie, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free';
import './styles.css';
import { useHistory } from "react-router-dom";

const Sidebar = (props) => {
    let history = useHistory();
    return (
        <div className="sidebar">
            <SideNav 
                onSelect={(selected) => {
                    var flag = selected;
                    const to = '/' +selected; // só um exemplo com a tela login
                    history.push(to);
                
                    // const to = '/' + selected;
                    // if (props.location.pathname !== to) {
                    //     history.push(to);
                    // }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected={props.pageSelected}>
                     <NavItem eventKey="profile"> {/* arquivo q vai ao clicar */}
                         <NavIcon>
                            <FontAwesomeIcon icon={faIdBadge} />
                        </NavIcon>
                        <NavText>
                            Perfil
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="insertGames"> {/* arquivo q vai ao clicar */}
                        <NavIcon>
                            <FontAwesomeIcon icon={faGamepad} />
                        </NavIcon>
                        <NavText>
                             Cadastro de Jogos
                        </NavText>           
                    </NavItem>
                    <NavItem eventKey="validateEmployee"> {/* arquivo q vai ao clicar */}
                        <NavIcon>
                            <FontAwesomeIcon icon={faUserFriends} />
                        </NavIcon>
                        <NavText>
                            Validar funcionários
                        </NavText>           
                    </NavItem>
                    <NavItem eventKey="reports"> {/* arquivo q vai ao clicar */}
                        <NavIcon>
                            <FontAwesomeIcon icon={faChartPie} />
                        </NavIcon>
                        <NavText>
                            Relatórios
                        </NavText>           
                    </NavItem>
                    <NavItem eventKey="logout"> {/* arquivo q vai ao clicar */}
                        <NavIcon>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                        </NavIcon>
                        <NavText>
                            Sair
                        </NavText>           
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </div>
    );
}
export default Sidebar;
