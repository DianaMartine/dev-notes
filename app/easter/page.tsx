'use client';
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

import pages from "@/app/shared/data/pages.json";
import routes from "@/app/shared/data/routes.json";
import socialLinks from "@/app/shared/data/socialLinks.json";

import Image from "next/image";
import { IonBreadcrumb } from "../shared/components/ion-breadcrumb/ion-breadcrumb";
import { IonDialog } from "../shared/components/ion-dialog/ion-dialog";
import IonLayout from "../shared/components/ion-layout/ion-layout";
import { IonParagraph } from "../shared/components/typo/ion-paragraph/ion-paragraph";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Easter() {
    const size = useWindowSize();
    const [recycle, setRecycle] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setRecycle(false);
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }
        , []);

    return (
        <>
            <ReactConfetti
                width={size.width ?? 0}
                height={size.height ?? 0}
                drawShape={(context) => {
                    context.beginPath();
                    context.moveTo(0, 0);
                    context.lineTo(10, 10);
                    context.lineTo(0, 10);
                    context.fill();
                }}
                recycle={recycle}
                colors={[
                    "#FF66C4",
                    "#FAEBD7",
                    "#59D9D9",
                ]}
            />
            <IonLayout>
                <IonBreadcrumb
                    navLinks={[
                        {
                            title: routes.home.title,
                            href: routes.home.url,
                            nested: [
                                {
                                    title: routes.easteregg.title,
                                },
                            ],
                        },
                    ]}
                />
                <div
                    className="flex flex-col items-center space-y-4 text-center"
                >
                    <IonDialog
                        triggerLabel={"Não clique aqui..."}
                        title={pages.easteregg.title}
                        description={pages.easteregg.description}
                    >
                    </IonDialog>
                    <Image
                        src={`${socialLinks.github.url}.png`}
                        alt="Easteregg"
                        width={300}
                        height={300}
                    />
                    <IonParagraph size={"medium"}>
                        {pages.easteregg.notes}
                    </IonParagraph>
                </div>
            </IonLayout>
        </>
    )
}