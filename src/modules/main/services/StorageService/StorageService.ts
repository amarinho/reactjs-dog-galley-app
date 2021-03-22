
const GALLERY_KEY = 'gallery';

export interface Gallery {
    images: string[];
}

export const saveGallery = (value: Gallery): void => localStorage.setItem(GALLERY_KEY, JSON.stringify(value));

export const getGallery = (): Gallery => {
    return localStorage.getItem(GALLERY_KEY) ?
        JSON.parse(String(localStorage.getItem(GALLERY_KEY)))
        : {images: []};
};

export const updateGallery = (value: string): void => {
    const currentGallery = getGallery();
    const imageArr = currentGallery.images;
    imageArr.push(value);
    saveGallery({images: imageArr});
};
