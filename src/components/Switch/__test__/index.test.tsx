import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Switch from "..";

describe('Switch component', () => {
    it('should be a dom', () => {
        const { getByRole } = render(<Switch></Switch>);
        const _switch = getByRole('switch');
        
        expect(_switch).toBeInTheDocument();
    })

    it('should correctly call the onClick func', () => {
        const mockOnClick = jest.fn();

        const { getByRole } = render(<Switch onClick={mockOnClick}></Switch>);
        const _switch = getByRole('switch');

        fireEvent.click(_switch)

        expect(mockOnClick).toHaveBeenCalledTimes(1)
    })

    it('should have "--disabled" class when disabled', () => {
        const { getByRole } = render(<Switch disabled></Switch>);
        const _switch = getByRole('switch');
        
        expect(_switch.className).toMatch(/--disabled\b/);
    })

    it('should not have "--disabled" class when not disabled', () => {
        const { getByRole } = render(<Switch></Switch>);
        const _switch = getByRole('switch');
        
        expect(_switch.className).not.toMatch(/--disabled\b/);
    })
})