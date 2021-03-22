import { DogGalleryFromSite as DogGalleryFromSiteComponent } from './DogGalleryFromSite';
import {getGallery} from "../../services/StorageService/StorageService";

const gallery = getGallery();
const component = (): JSX.Element => DogGalleryFromSiteComponent({images: gallery.images});

export const DogGalleryFromStorage = component;
