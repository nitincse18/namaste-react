const { render, screen, act, fireEvent } = require("@testing-library/react");
import { RestaurantMenu } from "./../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "./../../utils/appStore";
import Header from "./../Header";
import Cart from "./../Cart";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should load Restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Breakfast (10)");
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("fooditems").length).toBe(10);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText('🛒1')).toBeInTheDocument()

  fireEvent.click(addBtns[1]);

  expect(screen.getByText('🛒2')).toBeInTheDocument()

  expect(screen.getAllByTestId("fooditems").length).toBe(12);

  fireEvent.click(screen.getByRole("button", {name: 'Clear Cart'}));

  expect(screen.getAllByTestId("fooditems").length).toBe(10);
  expect(screen.getByText('Cart is empty. Add items to the cart')).toBeInTheDocument()
});
