import React, { forwardRef } from "react";
import { PageInfoProps } from "../types";
import { IonHeading } from "../typo/ion-heading/ion-heading";
import { IonParagraph } from "../typo/ion-paragraph/ion-paragraph";

export const IonPageInfo = forwardRef<HTMLDivElement, PageInfoProps>(
  ({ description, title, subtitle, children, bgColor, textColor }, ref) => {
    return (
      <div
        ref={ref}
        className="space-y-4"
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        <IonHeading level={1} bgColor={bgColor} textColor={textColor}>
          {title}
        </IonHeading>
        {subtitle && (
          <IonParagraph size="medium" textColor={textColor} bgColor={bgColor}>
            {subtitle}
          </IonParagraph>
        )}
        <IonParagraph size="medium" textColor={textColor} bgColor={bgColor}>
          {description}
        </IonParagraph>
        {children}
        <hr />
      </div>
    );
  },
) as React.ForwardRefExoticComponent<
  PageInfoProps & React.RefAttributes<HTMLDivElement>
>;
