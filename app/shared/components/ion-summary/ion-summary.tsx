import Link from "next/link";
import { forwardRef } from "react";
import { SummaryProps } from "../types";
import { IonHeading } from "../typo/ion-heading/ion-heading";

export const IonSummary = forwardRef<HTMLDivElement, SummaryProps>(
    ({ title, items, bgColor, textColor }, ref) => {
        return (
            <div
                ref={ref}
                className="space-y-4"
                style={{
                    backgroundColor: bgColor,
                    color: textColor,
                }}
            >
                <IonHeading level={2} bgColor={bgColor} textColor={textColor}>
                    {title}
                </IonHeading>
                <ol
                    className="
                flex-col
                gap-4
                list-decimal
                pl-4
                flex
                ">
                    {items.map((item) => (
                        <li
                            key={item.title}
                            className="
                            hover:text-[#922AC7]
                            "
                        >
                            <Link href={`#${item.slug}`}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ol>
                <hr />
            </div>
        );
    },
);

IonSummary.displayName = "IonSummary";