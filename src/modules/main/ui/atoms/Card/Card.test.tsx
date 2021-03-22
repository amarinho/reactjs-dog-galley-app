import {act, fireEvent, render} from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import {Card} from "./Card";

describe('ImageGallery tests', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render Card',() => {
        // Given
        const image =  "https://random.dog/07fcc953-0502-4cb6-bc0e-9b9d6904442d.jpg";

        const clickFunction = jest.fn();

        // When
        const wrapper = render(<Card image={image} htmlId='my-id' onClick={clickFunction}/>);


        act(() => {
            fireEvent.click(wrapper.getByTestId('my-id'));
        });


        // Then
        expect(clickFunction).toHaveBeenCalled();
        expect(wrapper.container).toBeDefined();
        expect(wrapper.getByTestId('my-id')).toHaveStyleRule('background-image', 'url(https://random.dog/07fcc953-0502-4cb6-bc0e-9b9d6904442d.jpg)');
    });

});
