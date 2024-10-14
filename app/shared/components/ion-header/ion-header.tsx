import type { HeaderProps } from "@/app/shared/components/types";
import common from "@/app/shared/data/common.json";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { forwardRef } from "react";
import { IonCaption } from "../typo/ion-caption/ion-caption";
import { IonHeading } from "../typo/ion-heading/ion-heading";

export const IonHeader = forwardRef<HTMLDivElement, HeaderProps>(
  ({ navLinks, socialLinks, bgColor, textColor }, ref) => {
    return (
      <header ref={ref} style={{ backgroundColor: bgColor, color: textColor }}>
        <IonHeading level={1} textColor={textColor}>
          {common.projectMainTitle.split(" ")[0]}{" "}
          <span className="
          text-[#FF66C4]
          "
          >
            {common.projectMainTitle.split(" ")[1]}
          </span>
        </IonHeading>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="sm"
              className="
              top-4
              right-4
              sm:right-6
              md:right-8
              lg:right-12
              bg-[#1D0259] 
              hover:bg-[#0D0126] 
              hover:outline 
              hover:outline-[1px] hover:outline-white
              absolute 
              "
            >
              <HamburgerMenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="
          bg-[#1D0259] 
          text-white
          ">
            <SheetHeader>
              <SheetTitle>
                <IonCaption size="medium" textColor="white">
                  {common.projectMainTitle}
                </IonCaption>
              </SheetTitle>
              <SheetDescription
                className="
                text-[#FF66C4]
                "
              >
                {common.projectDescription}
              </SheetDescription>
            </SheetHeader>
            <div className="
            grid
            gap-2
            mt-6
            justify-center
            items-center
            text-center
            md:justify-start
            md:text-left
            "
            >
              {navLinks?.map((link) => (
                <Link key={link.title} href={link.href} className="
                hover:text-[#FF66C4]
                ">
                  {link.title}
                </Link>
              ))}
            </div>
            <SheetFooter className="
            flex
            justify-center
            items-center
            w-full
            h-16
            md:justify-between
            ">
              <div className="
              flex
              gap-4
              "
              >
                <ul className="
                flex
                gap-4
                "
                >
                  {socialLinks?.map((link) => (
                    <li key={link.title}>
                      <Link href={link.href}>
                        <Button className="
                        bg-[#FF66C4] 
                        hover:bg-[#BB3186] 
                        hover:outline 
                        hover:outline-[1px] hover:outline-white
                        "
                        >
                          {link.icon}
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="
              absolute
              bottom-4
              left-1/2
              transform
              -translate-x-1/2
              "
              >
                <IonCaption size="medium" textColor="white">
                  &copy; {new Date().getFullYear()} {common.projectMainTitle}.
                </IonCaption>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </header>
    );
  },
) as React.ForwardRefExoticComponent<
  HeaderProps & React.RefAttributes<HTMLDivElement>
>;

IonHeader.displayName = "IonHeader";
