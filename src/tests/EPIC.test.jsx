// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import axios from 'axios';
// import EPIC from '../EPIC';
// jest.mock('../EPIC');
// jest.mock('axios');

/*describe(EPIC, () => {

})

test('formatDate formats date correctly', () => {
    const date = '2024-05-02';
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('05/02/2024');
});

test('handleExpand sets expandedImage correctly', () => {
    const mockImage = { caption: 'Test caption', date: '2024-05-02' };
    const { handleExpand } = render(<EPIC />);
    handleExpand(mockImage);
    expect(wrapper.find('[data-testid="expanded-image"]').prop('src')).toBe(
        `https://api.nasa.gov/EPIC/archive/natural/05/02/2024/png/${mockImage.image}.png?api_key=${process.env.VITE_NASA_API_KEY}`
    );
});*/
/*describe('EPIC component integration tests', () => {
    beforeEach(() => {
        axios.get.mockReset();
    });

    test('displays EPIC data fetched from API', async () => {
        const mockedData = [
            { identifier: '1', caption: 'Test Caption 1', date: '2024-05-01', image: 'test_image_1' },
            { identifier: '2', caption: 'Test Caption 2', date: '2024-05-02', image: 'test_image_2' }
        ];

        // Mock axios get method to resolve with mocked data
        axios.get.mockResolvedValueOnce({ data: mockedData });

        render(<EPIC />);

        // Ensure loading indicator is displayed
        expect(screen.getByText(/loading/i)).toBeInTheDocument();

        // Wait for data to be fetched and displayed
        await waitFor(() => {
            expect(screen.getByText(/test caption 1/i)).toBeInTheDocument();
            expect(screen.getByText(/test caption 2/i)).toBeInTheDocument();
        });

        // Ensure images are displayed
        expect(screen.getByAltText(/test caption 1/i)).toBeInTheDocument();
        expect(screen.getByAltText(/test caption 2/i)).toBeInTheDocument();
    });

    test('expands image with details on click', async () => {
        const mockedData = [{ identifier: '1', caption: 'Test Caption', date: '2024-05-02', image: 'test_image' }];

        axios.get.mockResolvedValueOnce({ data: mockedData });

        render(<EPIC />);

        // Wait for data to be fetched and displayed
        await waitFor(() => {
            expect(screen.getByText(/test caption/i)).toBeInTheDocument();
        });

        // Simulate click on a card
        userEvent.click(screen.getByText(/test caption/i));

        // Ensure modal opens with correct image and details
        expect(await screen.findByAltText(/test caption/i)).toBeInTheDocument();
        expect(screen.getByText(/date: 2024\/05\/02/i)).toBeInTheDocument();
        // You can add more assertions for other details displayed in the modal
    });
});*/






/*
describe('EPIC component', () => {
    beforeEach(() => {
      axios.get.mockResolvedValue({ data: [] });
    });
  
    test('renders EPIC component', async () => {
      render(<EPIC />);
      // You can add more specific tests based on your component's UI and behavior
      expect(screen.getByText(/earth polychromatic imaging camera/i)).toBeInTheDocument();
    });
  
    test('fetches EPIC data from NASA API on mount', async () => {
      render(<EPIC />);
      expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('https://api.nasa.gov/EPIC/api/natural?api_key='));
    });
  
    test('expands image on click', async () => {
      const epicData = [{ identifier: '1', caption: 'Test Caption', date: '2024-05-02', image: 'test_image' }];
      axios.get.mockResolvedValue({ data: epicData });
      render(<EPIC />);
      
      // Simulate click on a card
      userEvent.click(screen.getByText(/test caption/i));
  
      // Ensure modal opens with correct image
      expect(await screen.findByAltText(/test caption/i)).toBeInTheDocument();
    });
  });*/


import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import axios from 'axios'; // Mock axios for API calls
import EPIC from '../components/EPIC'; // Assuming the component is in the same directory
import { vi, vitest } from 'vitest';

vitest.mock('axios');

describe('EPIC Component', () => {
    // Mock EPIC data
    const mockData = [
        {
            identifier: '1',
            date: '2024-05-03',
            image: 'image1',
            caption: 'Test Caption 1',
            coords: {
                centroid_coordinates: { lat: 0, lon: 0 },
                sun_j2000_position: { x: 0, y: 0, z: 0 },
                lunar_j2000_position: { x: 0, y: 0, z: 0 }
            }
        },
        // Add more mock data if needed
    ];

    // Mock axios get method
    axios.get.mockResolvedValueOnce({ data: mockData });

    test('fetches EPIC data from NASA API', async () => {
        render(<EPIC />);
        // Check if API call is made
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('api.nasa.gov/EPIC'));
        });
    });

    test('expands modal on card click and displays image details', async () => {
        render(<EPIC />);
        await waitFor(() => expect(screen.getByText(/Test Caption 1/i)).toBeInTheDocument());
        const card = screen.getByAltText(/Test Caption 1/i);
        fireEvent.click(card);
        expect(screen.getByRole('modal')).toBeInTheDocument();
        // Assert image and details are displayed in the modal
        // const modalCaption = await screen.findByText(/Test Caption 1/i);
        // expect(modalCaption).toBeInTheDocument();
    });

    test('closes modal on close button click', async () => {
        render(<EPIC />);
        const card = screen.getByAltText(/Test Caption 1/i);
        fireEvent.click(card);
        const closeButton = screen.getByLabelText('close');
        fireEvent.click(closeButton);
        expect(screen.queryByRole('modal')).not.toBeInTheDocument();
    });

});
