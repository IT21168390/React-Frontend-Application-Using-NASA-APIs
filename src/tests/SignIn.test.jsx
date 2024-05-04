/*import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignIn from '../Authentication/SignIn';

// Mocking firebase/Auth module
jest.mock('../../firebase/Auth', () => ({
    doSignInWithEmailAndPassword: jest.fn(() => Promise.resolve()),
}));

describe('SignIn component', () => {
    test('renders SignIn component correctly', () => {
        const { getByText, getByLabelText } = render(
            <MemoryRouter>
                <SignIn />
            </MemoryRouter>
        );

        expect(getByText('Sign in')).toBeInTheDocument();
        expect(getByLabelText('Email Address')).toBeInTheDocument();
        expect(getByLabelText('Password')).toBeInTheDocument();
        expect(getByText("Don't have an account? Sign Up")).toBeInTheDocument();
    });

    test('submits form with correct data', async () => {
        const { getByLabelText, getByText } = render(
            <MemoryRouter>
                <SignIn />
            </MemoryRouter>
        );

        fireEvent.change(getByLabelText('Email Address'), { target: { value: 'test@example.com' } });
        fireEvent.change(getByLabelText('Password'), { target: { value: 'password123' } });
        fireEvent.click(getByText('Sign In'));

        await waitFor(() => {
            expect(doSignInWithEmailAndPassword).toHaveBeenCalledWith('test@example.com', 'password123');
        });
    });

    test('displays error message on invalid login', async () => {
        // Mocking doSignInWithEmailAndPassword to reject with an error
        jest.spyOn(console, 'error').mockImplementation(() => { }); // Suppressing console error
        jest.requireMock('../../firebase/Auth').doSignInWithEmailAndPassword.mockRejectedValue(new Error('Invalid login'));

        const { getByLabelText, getByText } = render(
            <MemoryRouter>
                <SignIn />
            </MemoryRouter>
        );

        fireEvent.change(getByLabelText('Email Address'), { target: { value: 'test@example.com' } });
        fireEvent.change(getByLabelText('Password'), { target: { value: 'password123' } });
        fireEvent.click(getByText('Sign In'));

        await waitFor(() => {
            expect(getByText('Invalid Login!')).toBeInTheDocument();
        });
    });
});*/


import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import SignIn from '../components/Authentication/SignIn';
import { useAuth } from '../contexts/authContext/authContext';
import { vi, vitest } from 'vitest';

vi.mock('../contexts/authContext/authContext');

test('renders sign in form', () => {
  const mockUseAuth = vi.fn().mockReturnValue({
    currentUser: null,
    userLoggedIn: false,
    loading: false,
  });
  useAuth.mockImplementation(mockUseAuth);

  render(<SignIn />);

  const emailField = screen.getByLabelText(/Email Address/i);
  const passwordField = screen.getByLabelText(/Password/i);
  const submitButton = screen.getByRole('button', { name: /Sign In/i });

  expect(emailField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
