import axios from "axios";
import { BASE_URL } from "../componentes/Pages/Productos/Carrito/Constant";

export const createUser = async (nombre, email, password) => {
    try {
        const response = await axios.post(
            `${BASE_URL}auth/register`, {
                nombre,
                email,
                password
            });
            return response.data;
    } catch (error) {
        console.log(error);
    }
}