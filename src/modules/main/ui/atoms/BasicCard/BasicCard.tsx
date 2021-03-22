import * as React from 'react';
import {Card} from '../Card/Card';
import {Styledlabel} from './BasicCard.styles';

export interface BasicCardProps {
    /** Card image */
    image: string;
    /** Card label */
    label?: string | HTMLElement;
    /** On click handler */
    onClick: (e: React.MouseEvent) => void;
    /** Id of the element */
    htmlId: string;
}

export const BasicCard = ({image, label, onClick, htmlId}: BasicCardProps): JSX.Element => {
    const handleClick = (event: React.MouseEvent): void => {
        onClick(event);
    };

    return (
        <Card onClick={handleClick} image={image} htmlId={htmlId}>
            <Styledlabel>{label}</Styledlabel>
        </Card>
    );
};
