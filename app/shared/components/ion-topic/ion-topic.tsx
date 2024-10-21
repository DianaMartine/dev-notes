import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import { TopicProps } from "../types";

export const IonTopic = forwardRef<HTMLDivElement, TopicProps>(
  ({ description, title, icon, slug, subtitle }, ref) => {
    return (
      <Card
        ref={ref}
        className="
        hover:shadow-lg
        hover:scale-105
        hover:bg-[#0D0126]
        hover:text-white
        transition-all
        w-full
        flex
        flex-col
        justify-between
        "
      >
        <CardHeader>
          {icon && (
            <Image
              className="
              top-[-1rem]
              right-[1.2rem]
              relative
              "
              src={icon}
              alt={subtitle ?? title}
              width={48}
              height={32}
              style={{
                width: "48px",
                height: "32px",
              }}
            />
          )}
          <CardTitle>{title}</CardTitle>

          {subtitle && <CardDescription>{subtitle}</CardDescription>}

          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href={`/topics/${slug}`}>
            Ver conteúdo
          </Link>
        </CardFooter>
      </Card>
    );
  },
);

IonTopic.displayName = "IonTopic";