import styled, {css} from 'styled-components';

interface StyledCardProps {
    backgroundImage?: string;
}

export const StyledCard = styled.div<StyledCardProps>`
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background: #ffffff;
    
    width: 100%;
    min-height: 200px;
    border-radius: 8px;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    max-height: 400px;
    max-width: 400px;
    
      ${props => props.backgroundImage
        && css`
            background-image: url(${props.backgroundImage});
            background-size: contain;
        `}
`;
