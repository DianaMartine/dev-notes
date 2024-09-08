import React, { forwardRef } from "react";
import type { CaptionProps } from "@/app/shared/components/types";

export const IonCaption = forwardRef<HTMLLabelElement, CaptionProps>(
  ({ children, size, bgColor, textColor }, ref) => {
    return (
      <label
        ref={ref}
        className={`
text-sm
${size === "xsmall" && "text-xs"}
${size === "small" && "text-sm"}
${size === "medium" && "text-md"}
${size === "large" && "text-lg"}
`}
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        {children}
      </label>
    );
  },
) as React.ForwardRefExoticComponent<
  CaptionProps & React.RefAttributes<HTMLLabelElement>
>;
