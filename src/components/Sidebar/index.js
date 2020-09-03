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
                <SideNav.Nav defaultSelected={props.rotaItem1}>
                    <NavItem eventKey={props.rotaItem1}>
                        <NavIcon>
                            <FontAwesomeIcon icon={faIdBadge} />
                        </NavIcon>
                        <NavText>
                            {props.item1}
                        </NavText>
                    </NavItem>
                    <NavItem eventKey={props.rotaItem2}>
                        <NavIcon>
                            <FontAwesomeIcon icon={faGamepad} />
                        </NavIcon>
                        <NavText>
                            {props.item2}
                        </NavText>           
                    </NavItem>
                    <NavItem eventKey={props.rotaItem3}>
                        <NavIcon>
                            <FontAwesomeIcon icon={faUserFriends} />
                        </NavIcon>
                        <NavText>
                            Validar funcionários
                        </NavText>           
                    </NavItem>
                    <NavItem eventKey={props.rotaItem4}>
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
