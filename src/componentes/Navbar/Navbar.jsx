import React, { useState } from 'react'
import { LogoStyles, NavbarContainer, NavbarOptions, NavbarPadre } from './navbarStyles'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import { IoCodeWorkingOutline } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {toggleHiddenMenu} from '../../Redux/User/UserSlice'
import ModalUser from './ModalUser/ModalUser';
import { FaUser } from "react-icons/fa";
import IconoCart from '../Pages/Productos/Carrito/IconoCart'

const Navbarr = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  const [hiddenCart, setHiddenCart] = useState(true);
  const closeMenu = () => {
    setIsOpen(false);
  };



  return (
    <NavbarPadre>
        <NavbarContainer>
          <ModalUser/>
            <LogoStyles>
                <h2><Link to="/">BecaShop</Link></h2>
            </LogoStyles>
            <NavbarOptions className={ isOpen ? 'open' : ''}>
                <ul>
                    <li><Link to="/contacto" onClick={closeMenu}><LuSend className='iconNavbar'/>Contacto</Link></li>
                    <li><Link to="productos" onClick={closeMenu}><IoCodeWorkingOutline className='iconNavbar'/>Productos</Link></li>
                    <li><Link to="preguntas-frecuentes" onClick={closeMenu}><MdAttachMoney className='iconNavbar'/>Preguntas Frecuentes</Link></li>
                </ul>  
                <IoIosClose className='IoIosClose' onClick={() => setIsOpen(false)}/>
            </NavbarOptions>
            <div className='botonesSesion'>
                  <button onClick={() =>
                    currentUser
                    ? dispatch(toggleHiddenMenu())
                    : (navigate('/login'), closeMenu())
                  }>
                    <span>
                      {currentUser ? (<><FaUser className='user'/> {currentUser.nombre}</>) : 'Iniciar Sesion'}
                    </span>
                  </button>
                  <IconoCart hiddenCart = {hiddenCart} setHiddenCart={setHiddenCart}/>
                  <RxHamburgerMenu className='RxHamburgerMenu ' onClick={() => setIsOpen(!isOpen)}/>
                </div>
            
        </NavbarContainer>
    </NavbarPadre>
  )
}

export default Navbarr