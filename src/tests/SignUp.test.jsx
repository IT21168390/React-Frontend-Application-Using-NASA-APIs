import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import SignUp from '../components/Authentication/SignUp';
import { useAuth } from '../contexts/authContext/authContext';
import { vitest } from 'vitest';

vitest.mock('../contexts/authContext/authContext');

test('renders sign up form', () => {
    const mockUseAuth = vitest.fn().mockReturnValue({
        currentUser: null,
        userLoggedIn: false,
        loading: false,
    });
    useAuth.mockImplementation(mockUseAuth);

    render(<SignUp />);

    const emailField = screen.getByLabelText(/Email Address/i);
    const passwordField = screen.getByLabelText(/Password/i);
    const submitButton = screen.getByRole('button', { name: /Sign Up/i });

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});