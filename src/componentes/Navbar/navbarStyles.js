import styled from "styled-components"

export const Navbarsito = styled.div`
    & .navbar {
    display: flex;
    align-items: center;
    
    background: #E7C6FF;
    color: white;
    font-family: Helvetica;
    font-weight: 300;
}

& .navbar__title {
    margin-right: auto;
    font-size: 150%;
    padding: 12px 16px;
}

& .navbar__item {
    padding: 16px 16px;
    cursor: pointer;
    vertical-align: middle;
}
`;

export const NavbarComplete = styled.div`
    display:flex;
    justify-content: space-around;
    width: 100%;

`