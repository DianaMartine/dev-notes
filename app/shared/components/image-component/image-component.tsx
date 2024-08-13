import React, { forwardRef } from 'react';
import type { ImageComponentProps } from '../types';
import clsx from 'clsx';

export const ImageComponent = forwardRef<HTMLImageElement, ImageComponentProps>(
    ({ src, alt, format = 'rounded', size = 'medium', filter = 'none', fit = 'cover' }, _ref) => {
        const formatMap = {
            rounded: 'rounded-lg',
            flat: 'rounded-none',
            circle: 'rounded-full',
            badge: 'relative top-[-1.6rem] right-[.8rem]',
        };
        const sizeMap = {
            small: 'w-[2rem] h-[2rem]',
            medium: 'w-[3rem] h-[3rem]',
            large: 'w-[4rem] h-[4rem]',
        };
        const filterMap = {
            invert: 'filter invert',
            none: '',
        };
        const fitMap = {
            cover: 'object-cover',
            contain: 'object-contain',
        };
        return (
            <img
                ref={_ref}
                src={src}
                alt={alt}
                className={clsx(
                    formatMap[format],
                    sizeMap[size],
                    filterMap[filter],
                    fitMap[fit],
                )}
            />
        );
    }
) as React.ForwardRefExoticComponent<ImageComponentProps & React.RefAttributes<HTMLImageElement>>;