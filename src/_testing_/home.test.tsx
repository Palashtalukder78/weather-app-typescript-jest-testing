import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../components/Home/Home";

import {createMemoryHistory} from "history"
import { Router } from "react-router-dom";

//for checking input field test
function isInputValue(e:Document | Element | Window | Node, inputValue: string) {
   return screen.getByDisplayValue(inputValue) === e; 
}

test('render app component', () => {
    const history = createMemoryHistory();
    history.push("/");

   render(<Router history={history}>
           <Home />
         </Router>);
  const homeId1 = screen.getByText("Search Country");
  expect(homeId1).toBeInTheDocument();
}); //1
test('Rendering Input field in the home component', () => {
    const history = createMemoryHistory();
    history.push("/");

   render(<Router history={history}>
           <Home />
         </Router>);
  const inputId = screen.getByTestId("inputbox-test-id");
  expect(inputId).toBeInTheDocument();
});
test('Rendering Button In the Home component', () => {
    const history = createMemoryHistory();
    history.push("/");

    render(<Router history={history}>
           <Home />
         </Router>);

    const buttonId = screen.getByTestId("button-testid");
  expect(buttonId).toBeInTheDocument();
}); 
test('checking in the button are disabled when the input box will be empty', () => {
    const history = createMemoryHistory();
    history.push("/");

    render(<Router history={history}>
           <Home />
         </Router>);
    const findButton = screen.getByRole('button');
    expect(findButton).toHaveAttribute('disabled')
}); 
test('checking input field value', () => {
    const history = createMemoryHistory();
    history.push("/");

    render(<Router history={history}>
           <Home />
    </Router>);
    const input = screen.getByLabelText("Enter country");
    fireEvent.change(input,{target:{
            value:"bangladesh"
        }});
    expect(isInputValue(input, 'bangladesh')).toBe(true);
}); 
