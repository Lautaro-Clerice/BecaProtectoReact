import React from 'react'
import { IoMdTime } from "react-icons/io";
import { CajaPedido } from './PedidosStyles';
import {formatDate} from '../../../Generales/Utils/FormatDate'
import {formatPrice} from '../../../Generales/Utils/FormatPrice'
import { useNavigate } from 'react-router-dom';

const CajaOrden = ({status, total, _id}) => {
    const navigate = useNavigate();

  return (
    <>
    <CajaPedido onClick={() => navigate(`/resumen/${_id}`) }>
        <h3>ID de la compra: {_id.slice(0, 7)}</h3>
        <h2>Precio {formatPrice(total)}</h2>
        <IoMdTime status={status}className='IoMdTime'/>
    </CajaPedido>
    </>
    
  )
}

export default CajaOrden