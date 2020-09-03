import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { faIdBadge, faGamepad, faUserFriends, faChartPie, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free';
import './styles.css';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <SideNav 
                onSelect={(selected) => {
                    var flag = selected;

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
                    <NavItem eventKey="games">
                        <NavIcon>
                            <FontAwesomeIcon icon={faGamepad} />
                        </NavIcon>
                        <NavText>
                             Jogos
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
