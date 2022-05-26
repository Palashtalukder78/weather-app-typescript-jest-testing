import { fireEvent, screen } from '@testing-library/react';
import Home from '../components/Home/Home';
import { RenderingByMemoryRouter } from './App.test';
// import { RenderingByMemoryRouter } from '../utils/test';

//for check inputbox testing
function isInputValue(
    e: Document | Element | Window | Node,
    inputValue: string
) {
    return screen.getByDisplayValue(inputValue) === e;
}
describe('Rendering home Component', () => {
    test('Render Home component with path "/"', async () => {
        RenderingByMemoryRouter('/', <Home />);
        expect(screen.getByText('Search')).toBeInTheDocument(); // done
    });

    test('Rendering input field in home component', () => {
        RenderingByMemoryRouter('/', <Home />);
        expect(screen.getByTestId('inputbox-test-id')).toBeInTheDocument();
    });

    test('Rendering button in home component', () => {
        RenderingByMemoryRouter('/', <Home />);
        expect(screen.getByTestId('button-testid')).toBeInTheDocument(); // done
    });

    test('Checking the button are disable when the inputbox are empty', () => {
        RenderingByMemoryRouter('/', <Home />);
        const findButton = screen.getByRole('button');
        expect(findButton).toHaveAttribute('disabled');
    });
    test('Checking input field value', () => {
        RenderingByMemoryRouter('/', <Home />);
        const input = screen.getByLabelText('Enter country Name');
        fireEvent.change(input, { target: { value: 'bangladesh' } });
        expect(isInputValue(input, 'bangladesh')).toBe(true);
    });
});
