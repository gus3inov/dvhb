import styled from 'styled-components';
import { StyledInput } from '@ui/atoms/Input/styles';

export const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    
    ${StyledInput} {
        margin-left: 30px;
    }
`;

export const StyledLabel = styled.h3`
    margin-right: 40px;
    white-space: nowrap;
`;
