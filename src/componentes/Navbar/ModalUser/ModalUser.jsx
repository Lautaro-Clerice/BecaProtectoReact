import React, { useState } from 'react'
import { ModalContainer, TittleModal } from './ModalUserStyles'
import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, toggleHiddenMenu } from '../../../Redux/User/UserSlice';

const ModalUser = () => {
  const { currentUser, hiddenMenu } = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainer
        initial={{ translateX: 600 }}
        animate={{ translateX: 0 }}
        exit={{ translateX: 600 }}
        transition={{ duration: 0.5 }}
        >
          <TittleModal>
            {`Hola ${currentUser?.nombre} !`}
          </TittleModal>
          <span onClick={() => {
            dispatch(setCurrentUser(null))
            dispatch(toggleHiddenMenu())
          }}>Cerrar sesión</span>
        </ModalContainer>
      )}
    </AnimatePresence>
  )
}

export default ModalUser