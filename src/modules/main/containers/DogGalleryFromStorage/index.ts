import { DogGalleryFromStorage as DogGalleryFromStorageComponent } from './DogGalleryFromStorage';
import {Gallery, getGallery} from "../../services/StorageService/StorageService";

export interface DogGalleryFromStorageProps {
    getGallery: () => Gallery;
}

const component = (): JSX.Element => DogGalleryFromStorageComponent({getGallery: getGallery});

export const DogGalleryFromStorage = component;
