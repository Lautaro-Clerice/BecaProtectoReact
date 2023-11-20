import styled from "styled-components";


export const InputBorderStyle = styled.div`
  display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const InputLabelStyled = styled.label`
	font-size: 1rem;
	display: flex;
`;

export const InputStyle = styled.input`
    padding: 10px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  border: none;
  box-shadow: 0px 0px 7px rgba(193, 85, 207, 0.7803921569);
  background-color: rgba(193, 85, 207, 0.2823529412);
  `

export const ErrorStyled = styled.span`
padding-left: 5px;
color: red;
`;

