import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 90%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    button {
        display:flex;
        align-items:center;
        justify-content: space-around;
        border-radius: 10px;
        border: none;
        width: 120px;
        height: 40px;
        background-color: #9319fd85;
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        transition: 0.3s;
        z-index: 2000000;
        &:hover {
            background-color: #006ECC;
            color: #fff;
        }

        .IoBagHandleOutline {
            color: 006ECC;
        }
        span{
            display: flex;
            justify-content:center;
            gap: 10px;
            width: 100%;
            align-items:center;
        }
    }
    .botonesSesion{
        display:flex;
        gap:15px;
    }
    .IoIosClose {
        display: none;
    }

    .RxHamburgerMenu {
        display: none;
    }

    @media (max-width: 930px) {
        .RxHamburgerMenu {
            display: flex;
            color: #fff;
            font-size: 28px;
        }
        .IoIosClose {
            display: flex;
            position: absolute;
            color: #006ECC;
            font-size: 36px;
            border-radius: 10px;
            background-color: white;
        }
        button {
            margin-right: 20px;
            width:90px;
            height:30px;
            font-size: 11px;
            z-index: 1;
        }
    }
`;

export const NavbarPadre = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #9319fd85;
    overflow: hidden;
    border-bottom: 1px solid white;
`;

export const LogoStyles = styled.div`
    width: 250px;
    color: #fff;
`;

export const NavbarOptions = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
     overflow-x: hidden;
     .iconNavbar {
        display:none;
      }
    ul {
        display: flex;
        align-items: center;
        width: 60%;
        justify-content: space-between;
        flex-direction: row;
    }

    li {
        cursor: pointer;
        list-style: none;
        color: white;
        transition: 0.4s;

        &:hover {
            transform: scale(1.07);
        }
    }
    
    @media (max-width: 930px) {
        z-index: 10000;
        flex-direction: column;
        width: 350px;
        height: 100%;
        position: fixed;
        top: 1px;
        right: 0;
        justify-content: start;
        align-items: start;
        border-radius: 10px;
        background-color: #fff;
        transform: translateY(-200%);
      transition: all .3s ease;
      .iconNavbar {
        display:flex;
      }
        &.open {
            transform: translateY(0);
        }
        ul {
            flex-direction: column;
            align-items: start;
            width: 100%;
            margin-left: 20px;
        }

        li {
            font-size: 16px;
            gap: 20px;
            display: flex;
            margin-top: 40px;
            color: #0E0B2B;
        }

        button {
            margin-left: 20px;
        }
        .botonesSesion{
            margin-top: 40px;
        }
    }
`;