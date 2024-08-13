import React, { forwardRef } from 'react';
import type { FooterProps } from '../types';

export const Footer = forwardRef<HTMLDivElement, FooterProps>(({
    children,
    bgColor = 'bg-gray-800',
    textColor = 'text-white',
}, ref) => {
    return (
        <footer
            ref={ref}
            className='w-full p-4 text-center'
            style={{
                backgroundColor: bgColor,
                color: textColor,
            }}>
            {children}
        </footer>
    );
}) as React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLDivElement>>;