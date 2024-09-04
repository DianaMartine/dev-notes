import React from 'react';
import { render } from '@testing-library/react';
import { Paragraph } from '../../../typo/paragraph/paragraph';

describe('ParagraphComponent', () => {
    test('should create', () => {
        const { container } = render(<Paragraph size='medium'>Test</Paragraph>);
        expect(container).toBeTruthy();
    }
    );
    test('should render children', () => {
        const { getByText } = render(<Paragraph size='medium'>Test</Paragraph>);
        expect(getByText('Test')).toBeTruthy();
    }
    );
    test('should render p', () => {
        const { container } = render(<Paragraph size='medium'>Test</Paragraph>);
        expect(container.querySelector('p')).toBeTruthy();
    }
    );
    test('should render with globals props', () => {
        const { container } = render(<Paragraph size='medium' bgColor='red' textColor='blue'>Test</Paragraph>);
        expect(container.firstChild).toHaveStyle('background-color: red');
        expect(container.firstChild).toHaveStyle('color: blue');
    }
    );
});