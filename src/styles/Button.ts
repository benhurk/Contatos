import styled from "styled-components";
import { colors } from ".";
import { Link } from "react-router-dom";

const Button = styled.button`
    font-weight: 700;
    font-size: 14px;
    border: none;
    border-radius: 8px;
    padding: 10px;
    background-color: ${colors.default};
    color: #fff;
    cursor: pointer;
`
export const LinkButton = styled(Link)`
    display: inline-block;
    font-weight: 700;
    text-align: center;
    font-size: 14px;
    border: none;
    border-radius: 8px;
    padding: 10px;
    background-color: ${colors.default};
    color: #fff;
    text-decoration: none;
    cursor: pointer;

    &.btn_green {
        background-color: ${colors.green};
        text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    }

    &.btn_red {
        background-color: ${colors.red};
        text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    }
`

export const ButtonRed = styled(Button)`
    background-color: ${colors.red};
`

export default Button;