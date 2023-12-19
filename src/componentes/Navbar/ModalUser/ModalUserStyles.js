import { motion } from "framer-motion";
import styled from "styled-components";


export const ModalContainer = styled(motion.div)`
    display:flex;
    flex-direction: column;
    width: 200px;
    position: absolute;
    height: 150px;
    z-index: 1000000;
    border-radius: 5px;
    right: 40px;
    top: 65px;
    background-color: white;
    border:1px solid #e7c6ff;
    position:fixed;
    hr {
        align-self: center;
        width: 90%;
    }
    span{
        cursor: pointer;
        display: flex;
        align-items: center;
        padding-left: 5px;
        border-radius: 8px;
        gap:10px;
        margin-left: 10px;
        margin-top: 5px;
        width: 150px;
        height: 35px;
        transition: .1s;
        &:hover {
            background-color: #9319fd40;
        }
        .iconPedido {
            color:#9319fd85;
        }
        .iconSesion {
            color:#9319fd85;
        }
    }
`

export const TittleModal = styled.h3`
    margin-top: 10px;
    margin-left: 10px;
    color:#683989;
    font-weight: 600;
`