import { act, render, screen } from "@testing-library/react";
import axios from "axios"
import Country from "../components/Country/Country";
import {createMemoryHistory} from "history"
import { Router } from "react-router-dom";

describe("Rendering CountryDetails Component", ()=>{
    beforeEach(async()=>{
        jest.spyOn(axios,'get').mockResolvedValue({
            data:[
                {
                    capital: 'dhaka',
                    population: 164689383,
                    latlng: [24.0, 90.0],
                    flags: {
                        png: 'https://flagcdn.com/w320/bd.png',
                        svg: 'https://flagcdn.com/bd.svg',
                    },
                },
            ]
        })
    });
    test('Rendering Country Details component with path "/details/bangladesh"', async()=>{
        // eslint-disable-next-line
        await act(async()=>{
            const history = createMemoryHistory();
            history.push("/details/bangladesh");

            render(<Router history={history}>
                <Country />
            </Router>);
        })
        const countryId = screen.getByText("Country Details");
        expect(countryId).toBeInTheDocument();
    })
    test('Rendering Country Info',async()=>{
        // eslint-disable-next-line
        await act(async()=>{
            const history = createMemoryHistory();
            history.push("/details/bangladesh");

        render(<Router history={history}>
                <Country />
            </Router>);
        })

        const countryId = screen.getByTestId("country-info");
        expect(countryId).toBeInTheDocument();
    })
});
