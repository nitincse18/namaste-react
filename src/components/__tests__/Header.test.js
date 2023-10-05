import { render, screen, fireEvent } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from './../../utils/appStore';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

test("Should render Header Component with login button", () => {

    
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
            </BrowserRouter>
        )

        const loginButton = screen.getByRole('button', {name: 'Login'});

        // const loginButton = screen.getByText('Login');

        expect(loginButton).toBeInTheDocument()

    
})

test("Should render Header Component with cart item 0", () => {
   
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText('🛒0');

    expect(cartItems).toBeInTheDocument()


})

test("Should render Header Component with a cart item", () => {
   
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/🛒/);

    expect(cartItems).toBeInTheDocument()


})

test("Should change Login Button to Logout on click", () => {
   
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole('button', {name: 'Login'});
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole('button', {name: 'Logout'});

    expect(logoutButton).toBeInTheDocument()


})