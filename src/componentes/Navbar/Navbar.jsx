import React, { useState } from 'react'
import { LogoStyles, NavbarContainer, NavbarOptions, NavbarPadre } from './navbarStyles'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import { IoCodeWorkingOutline } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setCurrentUser, toggleHiddenMenu} from '../../Redux/User/UserSlice'
import ModalUser from './ModalUser/ModalUser';



const Navbarr = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  return (
    <NavbarPadre>
        <NavbarContainer>
          <ModalUser/>
            <LogoStyles>
                <h2><Link to="/">BecaShop</Link></h2>
            </LogoStyles>
            <NavbarOptions className={ isOpen ? 'open' : ''}>
                <ul>
                    <li><Link to="/contacto"><LuSend className='iconNavbar'/>Contacto</Link></li>
                    <li><Link to="productos"><IoCodeWorkingOutline className='iconNavbar'/>Productos</Link></li>
                    <li><Link to="preguntas-frecuentes"><MdAttachMoney className='iconNavbar'/>Preguntas Frecuentes</Link></li>
                </ul>
                <button>
                <button onClick={() =>
              currentUser
                ? dispatch(toggleHiddenMenu())
                : navigate('/login')
                }>
                  <span>
                    {currentUser ? currentUser.nombre : 'Iniciar Sesion'}
                  </span>
                </button>
                </button>
                <button>
                <Link to="/register"><MdAttachMoney className='iconNavbar'/>Registrate</Link>
                </button>
                <IoIosClose className='IoIosClose' onClick={() => setIsOpen(false)}/>

            </NavbarOptions>
            <RxHamburgerMenu className='RxHamburgerMenu ' onClick={() => setIsOpen(!isOpen)}/>
        </NavbarContainer>
    </NavbarPadre>
  )
}

export default Navbarr