import styled from 'styled-components';
import { StyledWrapper as StyledRange } from '@ui/molecules/Range/styles';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 900px;
    padding: 40px 0;
    margin: 0 auto;

    ${StyledRange} {
        margin-bottom: 30px;
    }
`;

export const StyledButtonList = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
`;

export const StyledButton = styled.button`
    cursor: pointer;
    background: transparent;
    border: none;
    outline: 0;
    color: #fff;
    font-size: 17px;
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 7px 15px;
    margin: 0 10px;
`;

export const StyledTitle = styled.h2`
    text-align: center;
    font-size: 68px;
    margin-bottom: 40px;
`;
