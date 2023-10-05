const { render, screen } = require("@testing-library/react")
import Contact from './../Contact';
import '@testing-library/jest-dom'

// expect().{method} wiill come from @testing-library/jest-dom library

describe("Contact us Page Test Cases", () => {
    beforeAll(()=> {
        console.log('Before All')
    })
    test("Should load contact us component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole('heading')
        
        expect(heading).toBeInTheDocument()
    })
    
    test("Should load button inside contact component", () => {
        render(<Contact />);
    
        const button = screen.getByText('Submit')
        
        expect(button).toBeInTheDocument()
    })
    
    test("Should load input name inside contact component", () => {
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText('name')
        
        expect(inputName).toBeInTheDocument()
    })
    
    test("Should load 2 input boxes on the contact component", () => {
        render(<Contact />);
        // Quering
        const inputBoxes = screen.getAllByRole('textbox')
        // Assertion
        expect(inputBoxes.length).toBe(2)
    })
})

