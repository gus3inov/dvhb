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

export const StyledTitle = styled.h2`
    text-align: center;
    font-size: 68px;
    margin-bottom: 40px;
`;
