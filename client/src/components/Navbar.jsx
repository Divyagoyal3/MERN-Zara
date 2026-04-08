import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../utils/Images/Logo.png";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import {
  AddShoppingCartOutlined,
  FavoriteBorder,
  SearchRounded,
} from "@mui/icons-material";
import { MenuRounded } from "@mui/icons-material";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;
const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1450px;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;
const Logo = styled.img`
  height: 34px;
`;
const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Navlink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 1s slide-in;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  align-items: center;
  padding: 0 6px;
  color: ${({ theme }) => theme.primary};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
const Mobileicons = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 80%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ $isOpen }) => ($isOpen ? "100%" : "0")};
  z-index: ${({ $isOpen }) => ($isOpen ? "1000" : "-1000")};
`;
const TextButton = styled.div`
  text-align: end;
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar = ({ setOpenAuth, openAuth }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <NavbarContainer>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>
        <NavLogo>
          <Logo src={LogoImg} />
        </NavLogo>
        <NavItems>
          <Navlink to="/" onClick={() => setIsOpen(!isOpen)}>
            Home
          </Navlink>
          <Navlink to="/Shop" onClick={() => setIsOpen(!isOpen)}>
            Shop
          </Navlink>
          <Navlink to="/New_Arrivals" onClick={() => setIsOpen(!isOpen)}>
            New Arrival
          </Navlink>
          <Navlink to="/Orders" onClick={() => setIsOpen(!isOpen)}>
            Orders
          </Navlink>
          <Navlink to="/Contact" onClick={() => setIsOpen(!isOpen)}>
            Contact
          </Navlink>
        </NavItems>
        {isOpen && (
          <MobileMenu $isOpen={isOpen}>
            <Navlink to="/">Home</Navlink>
            <Navlink to="/Shop">Shop</Navlink>
            <Navlink to="/New_Arrivals">New Arrival</Navlink>
            <Navlink to="/Orders">Orders</Navlink>
            <Navlink to="/Contact">Contact</Navlink>
            <div style={{ display: "flex", gap: "12px", flex: "1" }}>
              <Button text="Sign In" outlined size="small" />
              <Button text="Sign Up" size="small" />
            </div>
          </MobileMenu>
        )}
        <Mobileicons>
          <Navlink to="/search">
            <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlink>
          <Navlink to="/favorite">
            <FavoriteBorder sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlink>
          <Navlink to="/cart">
            <AddShoppingCartOutlined
              sx={{ color: "inherit", fontSize: "30px" }}
            />
          </Navlink>
          <Button text="Sign In" onClick={() => setOpenAuth(!openAuth)} />
        </Mobileicons>
        <ButtonContainer>
          <Navlink to="/search">
            <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlink>
          <Navlink to="/favorite">
            <FavoriteBorder sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlink>
          <Navlink to="/cart">
            <AddShoppingCartOutlined
              sx={{ color: "inherit", fontSize: "30px" }}
            />
          </Navlink>
          <Button text="Sign In" small onClick={() =>{setOpenAuth(!openAuth)}} />
        </ButtonContainer>
      </NavbarContainer>
    </nav>
  );
};

export default Navbar;
