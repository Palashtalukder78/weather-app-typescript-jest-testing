import { render, screen } from "@testing-library/react";
import {  Router } from "react-router-dom";
import App from "../App";
import {createMemoryHistory} from "history"

test('render app component', async() => {
    const history = createMemoryHistory();
    history.push("/");

    render(<Router history={history}>
           <App />
    </Router>);
  const appId1 = screen.getByTestId("app-component-test-id");
  expect(appId1).toBeInTheDocument();
});

test('Rendering Home Component for path "/"', () => {
    const history = createMemoryHistory();
    history.push("/");

   render(<Router history={history}>
            <App />
        </Router>);

  const appId2 = screen.getByText("Search Country");
  expect(appId2).toBeInTheDocument();
}); 

test('Rendering 404 not found page', () => {
    const history = createMemoryHistory();
    history.push("/details/BD/gfdgfdgh");
    render(<Router history={history}>
            <App />
        </Router>);

    const appId3 = screen.getByText("404 Page Not Found");
    expect(appId3).toBeInTheDocument();
}); 
