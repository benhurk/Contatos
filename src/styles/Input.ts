import { styled } from "styled-components";

const Input = styled.input`
    width: 100%;
    padding: 8px;
    border-radius: 8px;
    outline: none;
    border: 2px solid #666666;
    font-weight: 700;
    color: #666666;

    &:focus {
        border-color: #1E90FF;
    }
`

export default Input;