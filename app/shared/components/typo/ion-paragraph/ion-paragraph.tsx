import React, { forwardRef } from "react";
import type { ParagraphProps } from "@/app/shared/components/types";
import clsx from "clsx";

export const IonParagraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, bgColor, textColor, size }, ref) => {
    return (
      <p
        ref={ref}
        className={clsx("font-normal", {
          "sm:text-[12px] text-[10px]": size === "xsmall",
          "sm:text-[14px] text-[12px]": size === "small",
          "sm:text-[16px] text-[14px]": size === "medium",
          "sm:text-[18px] text-[16px]": size === "large",
        })}
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        {children}
      </p>
    );
  },
);

IonParagraph.displayName = "IonParagraph";