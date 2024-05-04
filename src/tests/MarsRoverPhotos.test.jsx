// Import necessary dependencies and configure Vitest
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MarsRoverPhotos from '../components/MarsRoverPhotos';
import axios from 'axios';
import { vitest } from 'vitest';

// Unit tests
describe('MarsRoverPhotos component', () => {
    test('renders MarsRoverPhotos component', () => {
        render(<MarsRoverPhotos />);
        const titleElement = screen.getByText(/MARS ROVER PHOTOS/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('fetchMarsRoverPhotos function fetches data from NASA API', async () => {
        // Mocking axios.get function to simulate API call
        const axiosMock = vitest.spyOn(axios, 'get').mockResolvedValueOnce({
            data: {
                photos: [
                    {
                        id: 1,
                        img_src: 'test.jpg',
                        sol: 1000,
                        earth_date: '2023-01-01',
                        camera: { full_name: 'Test Camera' },
                        rover: {
                            name: 'Test Rover', status: 'active',
                            cameras: [
                                {
                                    "name": "Test Camera",
                                    "full_name": "Front Hazard Avoidance Camera"
                                },
                                {
                                    "name": "FHAZ",
                                    "full_name": "Front Hazard Avoidance Camera"
                                }
                            ]
                        }
                    }
                ]
            }
        });

        render(<MarsRoverPhotos />);

        // Wait for data to be fetched
        await waitFor(() => expect(screen.getByText((text) => text.includes('Test Camera'))).toBeInTheDocument());
        //await waitFor(() => expect(screen.getByText('Test Camera')).toBeInTheDocument());
        //await waitFor(() => expect(screen.getByText('Front Hazard Avoidance Camera')).toBeInTheDocument());

        expect(axiosMock).toHaveBeenCalledWith(expect.stringContaining('api.nasa.gov'));

        axiosMock.mockRestore();
    });

    // Add more unit tests as needed for other functions and components
});

// Integration tests
describe('MarsRoverPhotos integration', () => {
    test('clicking on a photo opens details modal', async () => {
        render(<MarsRoverPhotos />);

        fireEvent.click(screen.getByAltText(/Mars Rover Photo 1/i));

        const modalTitleElement = await screen.findByText(/Detailed Information for Photo 1/i);
        expect(modalTitleElement).toBeInTheDocument();
    });
});
