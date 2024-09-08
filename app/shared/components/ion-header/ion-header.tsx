import type { HeaderProps } from "@/app/shared/components/types"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import React, { forwardRef } from "react"
import { IonCaption } from "../typo/ion-caption/ion-caption"
import { IonHeading } from "../typo/ion-heading/ion-heading"

export const IonHeader = forwardRef<HTMLDivElement, HeaderProps>(
    ({ navLinks, socialLinks, bgColor, textColor }, ref) => {
        return (
            <header
                ref={ref}
                style={{ backgroundColor: bgColor, color: textColor }}
            >
                <IonHeading level={1} textColor={textColor}>
                    Dev
                    <span className="text-[#FF66C4]">Dictionary</span>
                </IonHeading>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            size="sm"
                            className="
                        absolute 
                        top-4
                        right-4
                        sm:right-6
                        md:right-8
                        lg:right-12
                        bg-[#1D0259] 
                        hover:bg-[#0D0126] 
                        hover:outline 
                        hover:outline-[1px] hover:outline-white
                        ">
                            <HamburgerMenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="bg-[#1D0259] text-white">
                        <SheetHeader>
                            <SheetTitle>
                                <IonCaption size="medium" textColor="white">
                                    Dev Dictionary
                                </IonCaption>
                            </SheetTitle>
                            <SheetDescription className="
                            text-[#FF66C4]
                            ">
                                Um dicionário para desenvolvedores
                                <span className="
                                mt-8
                                flex
                                flex-col
                                gap-4
                                ">
                                    {navLinks.map((link) => (
                                        <span key={link.title} className="mb-2">
                                            <Link href={link.href}>
                                                <IonCaption size="small" textColor="white">
                                                    {link.title}
                                                </IonCaption>
                                            </Link>
                                        </span>
                                    ))}
                                </span>
                            </SheetDescription>

                        </SheetHeader>
                        <SheetFooter>
                            <div className="mt-6 flex justify-center items-center">
                                <ul className=" flex gap-2">
                                    {
                                        socialLinks?.map((link) => (
                                            <li key={link.title}>
                                                <Link href={link.href}>
                                                    <Button className="bg-[#FF66C4] hover:bg-[#BB3186] hover:outline hover:outline-[1px] hover:outline-white">
                                                        {link.icon}
                                                    </Button>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="absolute bottom-4 right-[calc(50%-70px)]">
                                <IonCaption size="medium" textColor="white">
                                    &copy; 2024 Dev Dictionary
                                </IonCaption>
                            </div>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </header>
        )
    }
) as React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLDivElement>>