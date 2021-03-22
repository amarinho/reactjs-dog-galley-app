import React from 'react';
import {Page} from "../../ui/atoms/Page/Page";
import {DogGalleryFromStorage} from "../../containers/DogGalleryFromStorage";

export const Favorites = (): JSX.Element => (
    <Page htmlId='favorites-page'>
        <DogGalleryFromStorage/>
    </Page>
);
