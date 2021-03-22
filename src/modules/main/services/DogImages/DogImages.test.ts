import axios from "axios";
import {getDogImages} from "./DogImages";

jest.mock('axios');

describe('DogImages tests', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should get Dogs Images', async () => {

        // Given
        const dogs = {
            data: {
                fileSizeBytes: "144402",
                url: "https://random.dog/07fcc953-0502-4cb6-bc0e-9b9d6904442d.jpg"
            }
        };

        const mockedAxios = axios as jest.Mocked<typeof axios>;

        mockedAxios.get.mockResolvedValue(dogs);
        mockedAxios.create = jest.fn(() => mockedAxios);

        const expected = [
            "https://random.dog/07fcc953-0502-4cb6-bc0e-9b9d6904442d.jpg",
            "https://random.dog/07fcc953-0502-4cb6-bc0e-9b9d6904442d.jpg",
            "https://random.dog/07fcc953-0502-4cb6-bc0e-9b9d6904442d.jpg",
            "https://random.dog/07fcc953-0502-4cb6-bc0e-9b9d6904442d.jpg",
            "https://random.dog/07fcc953-0502-4cb6-bc0e-9b9d6904442d.jpg",
            "https://random.dog/07fcc953-0502-4cb6-bc0e-9b9d6904442d.jpg"
        ];

        // When
        const result = await getDogImages();

        // Then
        expect(result).toStrictEqual(expected);
    })
});
