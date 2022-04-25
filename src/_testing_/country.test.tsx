import { render, screen } from "@testing-library/react"
import Country from "../components/Country/Country"
import {createMemoryHistory} from 'history';
import { Router } from "react-router-dom";

test('render country info',()=>{
    const history = createMemoryHistory();
    history.push('/country/country')

    render(<Router history={history}>
        <Country></Country>
    </Router>)

    const details = screen.getByTestId('country');
    expect(details).toBeInTheDocument()
})