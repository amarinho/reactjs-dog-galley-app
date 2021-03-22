import * as React from 'react';
import {StyledCard} from './Card.styles';

export interface CardProps {
    /** Card image */
    image?: string;
    /** Children element */
    children?: React.ReactNode;
    /** On click handler */
    onClick: (e: React.MouseEvent) => void;
    /** Id of the element */
    htmlId: string;
}

export const Card = ({ image, children, onClick, htmlId }: CardProps): JSX.Element => {
    return (
        <StyledCard backgroundImage={image} onClick={onClick} data-testid={htmlId} >
            {children}
        </StyledCard>
    );
};
