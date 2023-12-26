import React, { useEffect } from 'react'
import { CajaPedido, PedidosContainer } from './PedidosStyles'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../../Axios/Axios-Orders';
import { clearError, fetchOrdersFail } from '../../../../Redux/Order/OrderSlice';
import MisOrdenes from './MisOrdenes';
const Pedidos = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  const {orders, error} = useSelector(state => state.orders);
  useEffect(() => {
    if(!orders){  
      getOrders(dispatch, currentUser )
    }

    if(!currentUser?.token) {
      dispatch(fetchOrdersFail())
    }else{
      error && dispatch(clearError())
    }
  }, [currentUser?.token, orders, error]);


  return (

    <PedidosContainer>
        <h2>Tus pedidos</h2>
        <MisOrdenes/>
    </PedidosContainer>
  )
}

export default Pedidos