import App from '../App';
import { componentRenderByMemoryRouter, toBeExpectByTestId, toBeExpectByText } from '../utils/test';


describe('Test App Router', () => {
    test('should render app componet', () => {
        componentRenderByMemoryRouter('/', <App />);
        toBeExpectByTestId('app-component-test-id');
    });

    test('should Render Home component with path "/"', () => {
        componentRenderByMemoryRouter('/', <App />);
        toBeExpectByText('Search Country');
    });
    test('should render 404 page', () => {
        componentRenderByMemoryRouter(
            '/details/BD/hjgsdfjghsdjfg',
            <App />
        );
        toBeExpectByText('404 Page Not Found');
    });
});
