// Import necessary dependencies
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NaturalEventsTracker from '../components/NaturalEventsTracker';
import Map from '../components/Map';
import { expect, vi } from 'vitest';
import axios from 'axios';

// Mock the NASA API response
const mockEventsData = [
    {
        id: 'eventId',
        title: 'Event Title',
        categories: [{ id: 8 }],
        geometries: [{ coordinates: [10, 20] }],
    },
];

vi.mock('fetch', () => Promise.resolve({ json: () => mockEventsData }));

describe('NaturalEventsTracker component', () => {
    /*it('should render loading screen initially', () => {
        render(<NaturalEventsTracker />);

        const loadingImage = screen.getByRole('img', { name: /loading/i });
        expect(loadingImage).toBeInTheDocument();
    });*/

    it('should render the map component', async () => {
        render(<NaturalEventsTracker />);

        // Wait for the API call to complete
        await new Promise((resolve) => setTimeout(resolve, 0));

        expect(screen.getByText('The Earth Observatory Natural Event Tracker')).toBeInTheDocument();
        //expect(screen.queryByRole('img', { name: /loading/i })).toBeNull();
    });

});