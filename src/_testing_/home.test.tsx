import { render, screen } from "@testing-library/react"
import Home from "../components/Home/Home"


test('testing in the component', async()=>{
    render(<Home></Home>)
    const country = screen.getByTestId('home');
    expect(country).toBeInTheDocument();
})