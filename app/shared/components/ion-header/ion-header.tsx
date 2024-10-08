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
                <span
                  className="
                  flex
                  flex-col
                  gap-4
                  mt-8
                  "
                >
                  {navLinks.map((link) => (
                    <span key={link.title} className="
                    mb-2
                    "
                    >
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
              <div className="
              mt-6 
              flex 
              justify-center 
              items-center
              "
              >
                <ul className="
                flex
                gap-2
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
              right-[calc(50%-70px)]
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
