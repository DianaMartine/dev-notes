import React from 'react';
import { render } from '@testing-library/react';
import { Heading } from '../../../typo/heading/heading';

describe('HeadingComponent', () => {
    test('should create', () => {
        const { container } = render(<Heading level={1}>Test</Heading>);
        expect(container).toBeTruthy();
    });
    test('should render children', () => {
        const { getByText } = render(<Heading level={1}>Test</Heading>);
        expect(getByText('Test')).toBeTruthy();
    });
    test('should render h1', () => {
        const { container } = render(<Heading level={1}>Test</Heading>);
        expect(container.querySelector('h1')).toBeTruthy();
    });
    test('should render h2', () => {
        const { container } = render(<Heading level={2}>Test</Heading>);
        expect(container.querySelector('h2')).toBeTruthy();
    });
    test('should render h3', () => {
        const { container } = render(<Heading level={3}>Test</Heading>);
        expect(container.querySelector('h3')).toBeTruthy();
    });
    test('should render h4', () => {
        const { container } = render(<Heading level={4}>Test</Heading>);
        expect(container.querySelector('h4')).toBeTruthy();
    });
    test('should render h5', () => {
        const { container } = render(<Heading level={5}>Test</Heading>);
        expect(container.querySelector('h5')).toBeTruthy();
    });
    test('should render h6', () => {
        const { container } = render(<Heading level={6}>Test</Heading>);
        expect(container.querySelector('h6')).toBeTruthy();
    });
    test('should render with globals props', () => {
        const { container } = render(<Heading level={1} bgColor='red' textColor='blue'>Test</Heading>);
        expect(container.firstChild).toHaveStyle('background-color: red');
        expect(container.firstChild).toHaveStyle('color: blue');
    });
});