import { render, act, screen, fireEvent } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from '../mocks/mockResListData.json'
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should search Res List for pizza text input", async () => {

    await act(async () => 
    render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>
    )
    );
    const cardsBeforeSearch = screen.getAllByTestId("resCard1");
    expect(cardsBeforeSearch.length).toBe(10)
    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId('searchInput');

    fireEvent.change(searchInput, {target: {value: 'pizza'}});

    fireEvent.click(searchBtn);
    // expect(searchBtn).toBeInTheDocument();
    // Screen should load 4 cards
    const cards = screen.getAllByTestId("resCard1")
    expect(cards.length).toBe(2)
})

it("Should filter top rated restaurant", async () => {

    await act(async () => 
    render(
    <BrowserRouter>
        <Body />
        {/* <RestaurantCard /> */}
    </BrowserRouter>
    )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard1");
    expect(cardsBeforeFilter.length).toBe(9)
    
    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn)

    const cardsAfterFilter = screen.getAllByTestId("resCard1");
    expect(cardsAfterFilter.length).toBe(6)
})