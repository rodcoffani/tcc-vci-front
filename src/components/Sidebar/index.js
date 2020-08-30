import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { faIdBadge, faGamepad, faUserFriends, faChartPie, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free';
import './styles.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <SideNav 
        onSelect={(selected) => {
            // Add your code here
        }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="profile">
                <NavItem eventKey="profile">
                    <NavIcon>
                        <FontAwesomeIcon icon={faIdBadge} />
                    </NavIcon>
                    <NavText>
                        Perfil
                    </NavText>
                </NavItem>
                <NavItem eventKey="insertGames">
                    <NavIcon>
                        <FontAwesomeIcon icon={faGamepad} />
                    </NavIcon>
                    <NavText>
                        Cadastro de jogos
                    </NavText>           
                </NavItem>
                <NavItem eventKey="validateEmployee">
                    <NavIcon>
                        <FontAwesomeIcon icon={faUserFriends} />
                    </NavIcon>
                    <NavText>
                        Validar funcionários
                    </NavText>           
                </NavItem>
                <NavItem eventKey="reports">
                    <NavIcon>
                        <FontAwesomeIcon icon={faChartPie} />
                    </NavIcon>
                    <NavText>
                        Relatórios
                    </NavText>           
                </NavItem>
                <NavItem eventKey="logout">
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
