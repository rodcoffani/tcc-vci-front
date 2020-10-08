import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { faIdBadge, faGamepad, faUserFriends, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
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
                    <NavItem eventKey="Login">
                        <NavIcon>
                            <FontAwesomeIcon icon={faIdBadge} />
                        </NavIcon>
                        <NavText>
                             Login
                        </NavText>           
                    </NavItem>
                    <NavItem eventKey="Cadastro">
                        <NavIcon>
                            <FontAwesomeIcon icon={faUserFriends} />
                        </NavIcon>
                        <NavText>
                            Cadastro
                        </NavText>           
                    </NavItem>
                    <NavItem eventKey="Sobre">
                        <NavIcon>
                            <FontAwesomeIcon icon={faInfoCircle} />
                        </NavIcon>
                        <NavText>
                            Sobre
                        </NavText>           
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </div>
    );
}
export default Sidebar;
