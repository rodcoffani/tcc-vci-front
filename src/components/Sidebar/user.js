import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { faIdBadge, faGamepad, faUserFriends } from "@fortawesome/free-solid-svg-icons";
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
                     <NavItem eventKey="games"> {/* arquivo q vai ao clicar */}
                         <NavIcon>
                            <FontAwesomeIcon icon={faGamepad} />
                        </NavIcon>
                        <NavText>
                            Jogos
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="userLogin"> {/* arquivo q vai ao clicar */}
                        <NavIcon>
                            <FontAwesomeIcon icon={faIdBadge} />
                        </NavIcon>
                        <NavText>
                             Login
                        </NavText>           
                    </NavItem>
                    <NavItem eventKey="userCad"> {/* arquivo q vai ao clicar */}
                        <NavIcon>
                            <FontAwesomeIcon icon={faUserFriends} />
                        </NavIcon>
                        <NavText>
                            Cadastro
                        </NavText>           
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </div>
    );
}
export default Sidebar;
