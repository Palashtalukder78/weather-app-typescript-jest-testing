
import { act } from '@testing-library/react';
import axios from 'axios';
import Country from '../components/Country/Country';
import { componentRenderByMemoryRouter, toBeExpectByTestId, toBeExpectByText } from '../utils/test';


describe('Test CountryDetails Componet', () => {
    beforeEach(async () => {
        jest.spyOn(axios, 'get').mockResolvedValue({
            data: [
                {
                    capital: 'Dhaka',
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

    test('should render CountryDetails component with path "/details/BD"', async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            componentRenderByMemoryRouter('/details/BD', <Country />);
        });

        toBeExpectByText('Country Details');
    });

    test('should render country info', async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            componentRenderByMemoryRouter('/details/BD', <Country />);
        });
        await toBeExpectByTestId('country-info');
    });
});
