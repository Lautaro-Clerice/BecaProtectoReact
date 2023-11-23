import styled from "styled-components";


export const FooterContainer = styled.footer`
    margin-bottom:0;
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color: #FF3CAC;
background-image: linear-gradient(225deg, #FF3CAC 0%, #9e5bde 50%, #a42bc5 100%);
    box-shadow: 0px 0px 10px #9e5bde; 
    h4 {
        color: white;
        font-weight: 500;
        margin-top: 3%;
    }
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li {
            transition: all .2s;
            margin: 10px;
            &:hover {
                transform: scale(1.03);
            }
        }
        a {
            text-decoration: none;
            color: white;
            
        }
    }
    

`;