import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { forwardRef } from "react";
import { BreadcrumbProps } from "../types";
import { IonCaption } from "../typo/ion-caption/ion-caption";

export const IonBreadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ navLinks, bgColor, textColor }, ref) => {
    return (
      <Breadcrumb
        ref={ref}
        className="
        py-4
        "
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        {navLinks.map((link) => (
          <BreadcrumbList key={link.title}>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="
                text-[#FaEBD7]
                hover:text-[#Ff66C4]
              "
                href={link.href}>
                {link.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator
              className="
              text-[#bb3186]
              "
            />
            {link.nested && (
              <div
                key={link.title}
                className="
                flex
                gap-1
                items-center
                "
              >
                {link.nested.map((nestedLink) => (
                  <div
                    key={nestedLink.title}
                    className="
                    flex
                    gap-1
                    items-center
                    "
                  >
                    {!nestedLink.nested && (
                      <BreadcrumbItem
                        key={nestedLink.title}
                        className="
                        text-[#FF66C4]
                        "
                      >
                        <IonCaption size="small">{nestedLink.title}</IonCaption>
                      </BreadcrumbItem>
                    )}
                    {nestedLink.nested && (
                      <div
                        key={nestedLink.title}
                        className="
                        gap-1
                        items-center
                        flex
                        "
                      >
                        <BreadcrumbItem>
                          <BreadcrumbLink
                            className="
                            text-[#FAEBD7]
                            hover:text-[#FF66C4]
                          "
                            href={nestedLink.href}
                          >
                            {nestedLink.title}
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator
                          className="
                          text-[#bb3186]
                          "
                        />
                        {nestedLink.nested.length > 1 ? (
                          <BreadcrumbItem>
                            <DropdownMenu>
                              <DropdownMenuTrigger
                                className="
                                flex 
                                items-center 
                                gap-1
                                text-[#FF66C4]
                                "
                              >
                                ... {nestedLink.nested[0].title}
                                <span className="sr-only">Toggle menu</span>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="start"
                                className="
                                p-4
                                rounded-md
                                shadow-lg
                                gap-1
                                text-[#FAEBD7]
                                bg-[#1D0259]
                                "
                              >
                                {nestedLink.nested.map((item) => (
                                  <div key={item.title}>
                                    {item.href ? (
                                      <DropdownMenuItem key={item.title}>
                                        <Link href={item.href}>
                                          {item.title}
                                        </Link>
                                      </DropdownMenuItem>
                                    ) : (
                                      <DropdownMenuItem key={item.title}>
                                        {item.title}
                                      </DropdownMenuItem>
                                    )}
                                  </div>
                                ))}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </BreadcrumbItem>
                        ) : (
                          <BreadcrumbItem>
                            <BreadcrumbLink
                              href={nestedLink.nested[0].href}
                              className="
                              text-[#FAEBD7]
                              "
                            >
                              {nestedLink.nested[0].title}
                            </BreadcrumbLink>
                          </BreadcrumbItem>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </BreadcrumbList>
        ))}
      </Breadcrumb>
    );
  },
);

IonBreadcrumb.displayName = "IonBreadcrumb";