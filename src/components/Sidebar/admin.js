import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { faIdBadge, faGamepad, faChartPie, faSignOutAlt, faHome } from "@fortawesome/free-solid-svg-icons";
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
                    const to = '/' + selected; 
                    history.push(to);
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected={props.pageSelected}>
                    <NavItem eventKey="administrador">
                         <NavIcon>
                            <FontAwesomeIcon icon={faHome} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                     <NavItem eventKey="profile"> {/* arquivo q vai ao clicar */}
                         <NavIcon>
                            <FontAwesomeIcon icon={faIdBadge} />
                        </NavIcon>
                        <NavText>
                            Perfil
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="editGames"> {/* arquivo q vai ao clicar */}
                        <NavIcon>
                            <FontAwesomeIcon icon={faGamepad} />
                        </NavIcon>
                        <NavText>
                            Edição de Jogos
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
