import { HeaderContainer } from "./styles";
import logoIgnite from  '../../assets/logo.svg'
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Home } from "../../pages/Home";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="logo ignite" />
      <nav>
        <NavLink to='/' title="Timer"><Timer size={24}/></NavLink>
        <NavLink to='/history' title="history"><Scroll size={24}/></NavLink>
      </nav>
    </HeaderContainer>
  )
}