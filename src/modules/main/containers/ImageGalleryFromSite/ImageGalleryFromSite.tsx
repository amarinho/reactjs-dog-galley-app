import * as React from 'react';

import {updateGallery} from "../../services/StorageService/StorageService";
import {useCallback, useEffect, useState} from "react";
import {ImageGallery} from "../../ui/molecules/ImageGallery/ImageGallery";

export interface ImageGalleryFromSiteProps {
    /** Gallery images */
    getDogImages: () => Promise<string[]>;
    /** should refresh gallery */
    toggleRefreshGallery: boolean;
}

export const ImageGalleryFromSite = ({getDogImages, toggleRefreshGallery}: ImageGalleryFromSiteProps): JSX.Element => {

    const [toggle, setToggle] = useState<boolean>(toggleRefreshGallery);
    const [images, setImages] = useState<string[]>([]);

    const getImages = useCallback(async (): Promise<void> => {
        const dogs: string[] = await getDogImages();
        setImages(dogs);
    }, [getDogImages]);

    useEffect((): void => {
        getImages();
        setToggle(toggleRefreshGallery);
    }, [toggleRefreshGallery, toggle,  getImages]);

    const handleClick = (image: string): void => {
        updateGallery(image);
    };

    return (
        <ImageGallery htmlId='home-gallery' onClick={handleClick} images={images}/>
    );
};
