import * as React from "react";
import {ImageGallery} from "../../ui/molecules/ImageGallery/ImageGallery";
import {Gallery} from "../../services/StorageService/StorageService";

export interface DogGalleryFromStorageProps {
    /** Gallery images */
    getGallery: () => Gallery;
}

const noop = (): void => {
    // do nothing
};

export const DogGalleryFromStorage = ({getGallery}: DogGalleryFromStorageProps): JSX.Element => {
    const images = getGallery().images;
    return (
        <ImageGallery images={images} htmlId='dog-gallery' onClick={noop} />
    );
};

