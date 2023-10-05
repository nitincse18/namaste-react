const { render, screen } = require("@testing-library/react")
import MOCK_DATA from '../mocks/resCartMock.json';
import "@testing-library/jest-dom";
import RestaurantCard from '../RestaurantCard'


it('Should render RestaurantCard component with props data', () => {
    render(<RestaurantCard restData={MOCK_DATA}/>);

    const name = screen.getByText('Asha Tiffins')
    expect(name).toBeInTheDocument()
})

it('Should render RestaurantCard component with Promoted label', () => {
    //HomeWork:  Test higher order component: withPromotedLabel()
    render(<RestaurantCard restData={MOCK_DATA}/>);

    const name = screen.getByText('Asha Tiffins')
    expect(name).toBeInTheDocument()
})