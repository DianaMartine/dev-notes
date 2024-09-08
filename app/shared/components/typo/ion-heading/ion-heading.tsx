import React, { forwardRef } from "react";
import type { HeadingProps } from "../../types";
import clsx from "clsx";

export const IonHeading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, bgColor, textColor, level }, _ref) => {
    const TagHeading: keyof JSX.IntrinsicElements = `h${level}`;
    const levelMap = {
      1: "sm:text-5xl text-4xl",
      2: "sm:text-4xl text-3xl",
      3: "sm:text-3xl text-2xl",
      4: "sm:text-2xl text-xl",
      5: "sm:text-xl text-lg",
      6: "sm:text-lg text-base",
    };
    return (
      <TagHeading
        ref={_ref}
        className={clsx("font-bold", levelMap[level])}
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        {children}
      </TagHeading>
    );
  },
) as React.ForwardRefExoticComponent<
  HeadingProps & React.RefAttributes<HTMLHeadingElement>
>;
