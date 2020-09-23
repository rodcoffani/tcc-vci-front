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
                    const to = '/' +selected;
                    history.push(to);
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected={props.pageSelected}>
                    <NavItem eventKey="">
                            <NavIcon>
                                <FontAwesomeIcon icon={faGamepad} />
                            </NavIcon>
                            <NavText>
                                Jogos
                            </NavText>           
                    </NavItem>
                    <NavItem eventKey="profile-employee">
                        <NavIcon>
                            <FontAwesomeIcon icon={faIdBadge} />
                        </NavIcon>
                        <NavText>
                            Perfil
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
