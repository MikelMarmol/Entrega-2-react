import React from 'react';
import logo from '../assets/Navbar-Image/logo.png';
import { Navbar, NavbarList, NavbarLinks, NavbarDiv, NavbarUl, Header, StyledLink, MenuIcon, ExtraDiv } from '../styles/NavBarStyles';
import { HiOutlineMenu } from "react-icons/hi";
import { useAppContext } from '../Context/Context';

export default function NavBar() {
    const {isMenuOpen, toggleMenu} = useAppContext();

return (
        <Header>
            <Navbar>
                <NavbarDiv>
                    <a href='http://localhost:5173/'><img src={logo} alt="Logo" /></a>
                    <ExtraDiv>
                    <MenuIcon size="40" cursor="pointer" onClick={toggleMenu} />
                    </ExtraDiv>
                </NavbarDiv>

                <NavbarUl isMenuOpen={isMenuOpen}>
                    
                    
                    <NavbarList>
                        <StyledLink to="/about">SOBRE MI</StyledLink>
                    </NavbarList>

                    <NavbarList>
                        <StyledLink to="/products"> VIDEOS </StyledLink>
                    </NavbarList>

                    <NavbarList>
                        <StyledLink to="/contact">CONTACTAME</StyledLink>
                    </NavbarList>

                    <NavbarList>
                        <NavbarLinks href="https://www.youtube.com/channel/UCEjTU5V5LiwUJaqBMKlw-PQ" target="_blank"> Youtube </NavbarLinks>
                    </NavbarList>

                    <NavbarList>
                        <NavbarLinks href="https://www.twitch.tv/miguelcuervo20" target="_blank"> Twitch </NavbarLinks>
                    </NavbarList>

                </NavbarUl>
            </Navbar>
        </Header>
    );
}