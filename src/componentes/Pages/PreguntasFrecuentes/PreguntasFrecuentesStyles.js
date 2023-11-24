import styled from "styled-components";


export const PreguntasFrecuentesContainer = styled.div`
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 20px;
    height: 60vh;

`

export const ParrafoTitulo = styled.div`
display: flex;
justify-self: center;
    h2 {
        color: #C879FF ;
        font-size: 20px;
        width: 100%;
        margin-top:20px;
        }
        

`
export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 900px;
    flex-wrap: wrap;
    margin-top: 40px;
    .btn {
        background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
        margin-top: 20px;
        width: 100px;
        height: 45px;
        color: #C879FF ;
        border-radius: 8px;
        box-shadow: 0px 0px 5px grey;
    }
    @media (max-width:900px){
        flex-direction: column;
        align-items: center;
        width: 600;
    }
`
export const ImgInfo = styled.div`
    width: 450px;
    height: 400px;
    display: flex;
    justify-content: center;
    border-radius: 10px 0 0 10px;
    align-items: center;
    background-color: #FFDEE9;
    background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
    @media (max-width:900px){
        border-radius: 0px;
    }
    img {
        width: 300px;
        height: 300px;
        border-radius: 10px;
    }
`
export const TextoInfo = styled.div`
    width: 450px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    border: 2px solid;
  border-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
  border-image-slice: 1;
  border-radius: 10px;
  @media (max-width:900px){
        border-top:none;
    }
    h2 {
        font-weight: 600;
        font-size: 24px;
        color: #C879FF;
        margin-top: 20px;
    }
    p {
        width:360px;
        height: 350px;
        margin-top: 40px;
    }
`