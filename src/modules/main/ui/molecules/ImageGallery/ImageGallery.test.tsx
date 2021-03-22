import {render} from '@testing-library/react';
import React from 'react';
import {ImageGallery} from "./ImageGallery";

describe('ImageGallery tests', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render Image Gallery',() => {

        // Given
        const images = [
            "https://random.dog/07fcc953-0502-4cb6-bc0e-9b9d6904442d.jpg",
            "https://random.dog/07fcc953-0502-4cb6-bc0e-9b9d6904442d.jpg"
        ];

        const clickFunction = jest.fn();

        // When
        const wrapper = render(<ImageGallery images={images} htmlId='my-id' onClick={clickFunction}/>);

        // Then
        expect(wrapper.container).toBeDefined();
    });

});
