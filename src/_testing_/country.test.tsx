import { act, screen } from '@testing-library/react';
import axios from 'axios';
import Country from '../components/Country/Country';
import { RenderingByMemoryRouter } from './App.test';
describe('Rendering CountryDetails Component', () => {
    beforeEach(async () => {
        jest.spyOn(axios, 'get').mockResolvedValue({
            data: [
                {
                    capital: 'dhaka',
                    population: 164689383,
                    latlng: [24.0, 90.0],
                    flags: {
                        png: 'https://flagcdn.com/w320/bd.png',
                        svg: 'https://flagcdn.com/bd.svg',
                    },
                },
            ],
        });
    });
    test('Rendering Country Details component with path "/details/bangladesh"', async () => {
        // eslint-disable-next-line
        await act(async () => {
            RenderingByMemoryRouter('/details/bangladesh', <Country />);
        });
        expect(screen.getByText('Country Details')).toBeInTheDocument(); // Done
    });
    test('Rendering country info', async () => {
        // eslint-disable-next-line 
        await act(async () => {
            RenderingByMemoryRouter('/details/Bangladesh', <Country />);
        });
        await expect(screen.getByTestId('country-info')).toBeInTheDocument();
    });
});
