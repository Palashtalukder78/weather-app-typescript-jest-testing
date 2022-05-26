import { render, screen } from '@testing-library/react';
import App from '../App';
// import { RenderingByMemoryRouter } from '../utils/test';
import React, { ReactChild, ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';

export const RenderingByMemoryRouter = (
    routingPath: string | '',
    componentName: ReactElement | ReactChild
) => {
    render(
        <MemoryRouter initialEntries={[routingPath]}>
            {componentName}
        </MemoryRouter>
    );
};

describe('Test App Router', () => {
    test('Render app componet', () => {
        RenderingByMemoryRouter('/', <App />);
        expect(screen.getByTestId('app-component-test-id')).toBeInTheDocument(); 
    });
    test('Rendering Home component for path "/"', () => {
        RenderingByMemoryRouter('/', <App />);
        expect(screen.getByText('Search Country')).toBeInTheDocument();
    });
    test('should render 404 not found page', () => {
        RenderingByMemoryRouter(
            '/details/BD/hjgsdfjghsdjfg',
            <App />
        );
        expect(screen.getByText('404 Page Not Found')).toBeInTheDocument(); 
    });
}); 
