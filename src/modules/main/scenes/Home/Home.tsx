import React, {useState} from 'react';
import {Page} from "../../ui/atoms/Page/Page";
import {ImageGalleryFromSite} from "../../containers/ImageGalleryFromSite";
import {Button} from "../../ui/atoms/Button/Button";

export const Home = (): JSX.Element => {

    const [toggle, setToggle] = useState<boolean>(false);

    /* eslint-disable @typescript-eslint/no-unused-vars */
    const refreshPage = (e: React.MouseEvent): void  => {
        setToggle(!toggle);
    };

    return (
        <Page htmlId='home-page'>
            <Button primary size="small" onClick={refreshPage} label="Refresh" htmlId='header-home-button'/>
            <ImageGalleryFromSite toggleRefreshGallery={toggle}/>
        </Page>
    );
};
