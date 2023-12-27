import axios from "axios"
import { createOrderFail, fetchOrdersFail, fetchOrdersStart, fetchOrdersSuccess } from "../Redux/Order/OrderSlice"
import { BASE_URL } from "../componentes/Pages/Productos/Carrito/Constant"
import { useSelector } from "react-redux"

export const getOrders = async (dispatch, currentUser) => {
        dispatch(fetchOrdersStart())

        try {
                const orders = await axios.get(`${BASE_URL}orders`, {
                    headers: {
                        "x-token": currentUser.token,
                    },
                })
                console.log(orders);
                if (orders) {
                    dispatch(fetchOrdersSuccess(orders.data.data))
                }
        } catch (error) {
          console.error(error.response);
          dispatch(fetchOrdersFail("Error al obtener órdenes"));
        }
}
export const CreateOrder = async (order, dispatch, currentUser) => {
    try {
      const response = await axios.post(`${BASE_URL}orders`, order, {
        headers: {
          'x-token': currentUser.token,
        },
      });
      if (response) {
        getOrders(dispatch, currentUser);
      }
    } catch (err) {
      dispatch(createOrderFail());
    }
  };