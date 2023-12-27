import React, { useEffect } from 'react'
import { CajaPedido, PedidosContainer, TitlePedido } from './PedidosStyles'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../../Axios/Axios-Orders';
import { clearError, fetchOrdersFail } from '../../../../Redux/Order/OrderSlice';
import MisOrdenes from './MisOrdenes';
import { useNavigate } from 'react-router-dom';
const Pedidos = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const { orders, error } = useSelector(state => state.orders);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser)
    }

    if (!currentUser?.token) {
      dispatch(fetchOrdersFail());
    } else {
      error && dispatch(clearError());
    }
  }, [dispatch, currentUser?.token, orders, error]);

  return (
    <>
      <TitlePedido>
        <h2>Tus pedidos</h2>
      </TitlePedido>
      <PedidosContainer>
          <MisOrdenes/>
      </PedidosContainer>
    </>
  )
}

export default Pedidos