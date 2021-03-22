import {ImageGalleryFromSite as ImageGalleryFromSiteComponent} from './ImageGalleryFromSite';
import {getDogImages} from "../../services/DogImages/DogImages";
interface Props {
    toggleRefreshGallery: boolean;
}

const component = (props: Props): JSX.Element =>
    ImageGalleryFromSiteComponent({getDogImages: getDogImages, toggleRefreshGallery: props.toggleRefreshGallery});

export const ImageGalleryFromSite = component;
