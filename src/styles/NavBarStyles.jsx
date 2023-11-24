import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from "react-icons/hi";

export const Header = styled.header`
    background-color:  rgb(255, 145, 0);; 
    width: 100%;
    height: 85px;
    padding: 5px;
    & img {
        display: flex;
        width: 75px;
        height: 75px;
    }

    @media (max-width: 768px) {
        padding: 10px;
        width: 100%;
        flex-direction: column;
    } `;

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column; 
    } `;

export const NavbarUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 15px 0px 0px; 
    
    @media (max-width: 768px) {
        flex-direction: column;
        display: ${props => (props.isMenuOpen ? 'flex' : 'none')};
        text-align: center;
        align-items: center;
    } `

export const NavbarList = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px; `

export const NavbarLinks = styled.a`
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: 800; 

    &:hover {
    color: #000000;
    font-size: 22px;
    } 

    @media (max-width: 992px) {
        font-size: 18px;
    };`

export const NavbarDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    
    @media (max-width: 768px) {
        flex-direction: column; 
    } `

export const NavbarTitle = styled.h1`
    padding: 10px;
    font-size: 25px;
    font-weight: 800; `

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: 800; 

    &:hover {
    color: #000000;
    font-size: 22px;
    } 

    @media (max-width: 992px) {
        font-size: 18px;
    }; `

export const MenuIcon = styled(HiOutlineMenu)`
    display: none;

    @media (max-width: 768px) {
        display: block;
        cursor: pointer;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: 810px) and (max-width: 1080px) {
        display: none;
        align-items: center;
        justify-content: center;
} `

export const ExtraDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;`
