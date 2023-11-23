import styled from "styled-components";
import imgMate from "../Img/FONDOMATE.jpg"
import imgCocina from "../Img/FONDOCOCINA.jpeg"
import imgPantuflas from "../Img/FONDOPANTUFLAS.jpg"

export const HeroContainerStyle = styled.div`
    margin-top: 20px;
    display: flex ;
    justify-content: space-around;
    flex-wrap: wrap;
    grid-gap: 20px;
    margin-bottom: 20px;
    h2{
        height: 40px;
        background-color: #a7bed3;
        color: #fff;
    }
    width:100%;
`;

export const MateStyle = styled.div`
    border-radius:7px;
    width: 250px;
    background-size: cover;
    height: 300px;
    text-align: center;
    background-image: url(${imgMate});
    background-repeat: no-repeat;
    background-position: 0% 45%;
    h2 {
        height: 40px;
        background-color: #ecbcfd;
        color: #fff;        
    }
`;
export const PijamasStyle = styled.div`
    width: 250px;
    background-image: url(${imgPantuflas});
    border-radius:7px;
    background-position: 0% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    text-align: center;
    h2 {
        height: 40px;
        background-color: #ffd97d;
        color: #fff;
    }
`;

export const CocinaStyle = styled.div`
border-radius:7px;
    width: 250px;
    text-align: center;
    background-image: url(${imgCocina});
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
`;