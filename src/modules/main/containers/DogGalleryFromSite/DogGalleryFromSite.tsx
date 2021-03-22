import * as React from "react";
import {ImageGallery} from "../../ui/molecules/ImageGallery/ImageGallery";

export interface DogGalleryFromStorageProps {
    /** Gallery images */
    images: string[];
}

const noop = (): void => {
    // do nothing
};

export const DogGalleryFromSite = ({images}: DogGalleryFromStorageProps): JSX.Element =>
    <ImageGallery images={images} htmlId='dog-gallery' onClick={noop}/>;
