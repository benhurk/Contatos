import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.50);
    background-color: #FCFCFC;
`

export const TitleArea = styled.div`
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`

export const Title = styled.h3`
    font-size: 24px;
    color: ${colors.default};
    font-weight: 700;
    background-color: transparent;
    margin-bottom: 8px;
`

export const Description = styled.p`
    color: ${colors.default};
    opacity: .75;
`

export const TagsArea = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`

export const ButtonsArea = styled.div`
    display: flex;
    gap: 16px;
`