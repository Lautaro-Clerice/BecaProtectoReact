import { motion } from "framer-motion";
import styled from "styled-components";


export const ModalContainer = styled(motion.div)`
    width: 200px;
    position: absolute;
    height: 250px;
    z-index: 1000000;
    border-radius: 5px;
    right: 0;
    top: 65px;
    background-color: #e7c6ff;
`

export const TittleModal = styled.h3`
    margin-left: 10px;
    color:white;
`