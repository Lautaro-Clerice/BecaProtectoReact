import React from 'react'

import { useSelector } from 'react-redux';
import Loader from "../../../../UI/Loader/Loader"
import CajaOrden from './CajaOrden';
const MisOrdenes = () => {

    const {orders, loading, error} =useSelector(state => state.orders)
    if(loading && !orders){
        return <Loader styles={{height: '50px', width:'50px'}}/>
    }
    if (error) {
        return <h2>{error}</h2>
    }
  return (
    <>
      {
        orders?.lenght ? (
          orders.map((order) => {
            return <CajaOrden {...order} key={order._id}/>
          }) 
        ): (
          <h2>Que esperas para hacer tu primer pedido?</h2>
        )
      }
    </>
  )
  
}

export default MisOrdenes