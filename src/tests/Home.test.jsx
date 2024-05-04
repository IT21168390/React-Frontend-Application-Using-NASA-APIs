import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';
import axios from 'axios';
import { vitest } from 'vitest';

describe('Home Component', () => {
    test('renders loading state initially', () => {
        render(<Home />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
});