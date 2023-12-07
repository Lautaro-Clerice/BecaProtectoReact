import React, { useState } from 'react'
import { LogoStyles, NavbarContainer, NavbarOptions, NavbarPadre } from './navbarStyles'
import { IoBagHandleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import { IoCodeWorkingOutline } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setCurrentUser} from '../../Redux/User/UserSlice'



const Navbarr = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  return (
    <NavbarPadre>
        <NavbarContainer>
            <LogoStyles>
                <h2>BecaTemplates</h2>
            </LogoStyles>
            <NavbarOptions className={ isOpen ? 'open' : ''}>
                <ul>
                    <li><LuSend className='iconNavbar'/>Contacto</li>
                    <li><IoCodeWorkingOutline className='iconNavbar'/>Nuestros Trabajos</li>
                    <li><MdAttachMoney className='iconNavbar'/>Planes</li>
                    <li><IoPersonOutline className='iconNavbar'/>Sobre nosotros</li>
                </ul>
                <button><IoBagHandleOutline className='IoBagHandleOutline'/>
                <Link to="/login">
                  <span>
                    {currentUser ? currentUser.nombre : 'Iniciar Sesion'}
                  </span>
                </Link>
                </button>
                <IoIosClose className='IoIosClose' onClick={() => setIsOpen(false)}/>

            </NavbarOptions>
            <RxHamburgerMenu className='RxHamburgerMenu ' onClick={() => setIsOpen(!isOpen)}/>
        </NavbarContainer>
    </NavbarPadre>
  )
}

export default Navbarr