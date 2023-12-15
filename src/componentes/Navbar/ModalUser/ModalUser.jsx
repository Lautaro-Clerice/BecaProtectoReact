import React, { useState } from 'react'
import { ModalContainer, TittleModal, lineaStyles } from './ModalUserStyles'
import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, toggleHiddenMenu } from '../../../Redux/User/UserSlice';
import { useMediaQuery } from '@react-hook/media-query';
import { IoBagOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";


const ModalUser = () => {
  const { currentUser, hiddenMenu } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const isScreenSmallerThan930px = useMediaQuery("(max-width: 930px)");
  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainer
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.95,
        }}
        transition={{ duration: 0.2 }}
        >
          <TittleModal>
            {`Hola ${currentUser?.nombre} !`}
          </TittleModal>
            <hr />
            <span><IoBagOutline className='iconPedido'/>Mis pedidos</span>
          <span onClick={() => {
            dispatch(setCurrentUser(null))
            dispatch(toggleHiddenMenu())
          }}><IoExitOutline className='iconSesion'/>Cerrar sesión</span>
        </ModalContainer>
      )}
    </AnimatePresence>
    
    
  )
}

export default ModalUser