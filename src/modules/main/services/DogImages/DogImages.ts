import axios from "axios";

const DOG_URL = 'https://random.dog/woof.json';

export interface DogUrl {
    fileSizeBytes: string;
    url: string;
}

const getDogImage = async (): Promise<DogUrl> => {
    try {
        const response = await axios.get(DOG_URL);
        return response.data;
    } catch (e) {
        return Promise.reject(e);
    }
};

export const getDogImages = async (): Promise<string[]> => {
    const dogGallery = [];
    let i =0;
    while(i <6) {
        const dog = await getDogImage();;
        const extension = dog.url.split('.')[2].toLowerCase();
        if(extension === 'PNG' || extension === 'jpg' || extension === 'jpeg' || extension === 'gif'){
            dogGallery.push(dog.url);
            i++;
        }
    }
    return dogGallery;
};
