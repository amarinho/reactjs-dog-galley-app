import * as React from 'react';
import {Card} from '../../atoms/Card/Card';
import {StyledImageGallery} from './ImageGallery.styles';

export interface ImageGalleryProps {
    /** Gallery images */
    images: string[];
    /** On click handler */
    onClick: (image: string) => void;
    /** Id of the element */
    htmlId: string;
}

export const ImageGallery = ({images, onClick, htmlId}: ImageGalleryProps): JSX.Element => {
    const handleClick = (image: string) => {
        if (onClick) {
            onClick(image);
        }
    };

    return (
        <StyledImageGallery>
            {images.map((image: string, key: number) => (
                <Card
                    /* eslint-disable @typescript-eslint/no-unused-vars */
                    onClick={(event: React.MouseEvent): void => handleClick(image)}
                    image={image}
                    htmlId={`${htmlId}${Math.random()}`}
                    key={key}/>
            ))}
        </StyledImageGallery>
    );
};
