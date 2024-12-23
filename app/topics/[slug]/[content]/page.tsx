"use client";
import { IonBreadcrumb } from "@/app/shared/components/ion-breadcrumb/ion-breadcrumb";
import { IonContent } from "@/app/shared/components/ion-content/ion-content";
import IonLayout from "@/app/shared/components/ion-layout/ion-layout";
import { IonPageInfo } from "@/app/shared/components/ion-page-info/ion-page-info";
import { IonSummary } from "@/app/shared/components/ion-summary/ion-summary";
import data from "@/app/shared/data/data.json";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Content() {
  const { slug, content } = useParams();
  const slugData = data.topics.find(
    (topic) => topic.title.toLowerCase() === slug,
  );
  const contentData = slugData?.content?.find((item) => item.slug === content);

  const [currentContent] = useState({
    content: {
      title: contentData?.title ?? "",
      description: contentData?.description ?? "",
    },
  });

  return (
    <IonLayout>
      <IonBreadcrumb
        navLinks={[
          {
            title: "Home",
            href: "/",
            nested: [
              {
                title: slugData?.title ?? "",
                href: `/topics/${slug}`,
                nested: [
                  {
                    title: contentData?.title ?? "",
                  },
                  {
                    title: (
                      slugData?.content
                        ?.filter((item) => item.slug !== contentData?.slug)
                        .map((item) => item.title) ?? []
                    ).join(", "),
                    href: `/topics/${slug}/${slugData?.content?.filter((item) => item.slug !== contentData?.slug)[0].slug}`,
                  },
                ],
              },
            ],
          },
        ]}
      />
      <IonPageInfo
        title={currentContent.content.title}
        description={currentContent.content.description}
      />

      <div className="space-y-4" id="top">
        <IonSummary
          title="Sumário:"
          items={(contentData?.content ?? []).map((item) => ({
            title: item.title,
            description: item.description,
            slug: item.slug,
          }))}
        />

        {
          contentData?.content?.map((item) => (
            <IonContent
              key={item.slug}
              title={item.title}
              description={item.description}
              content={[
                {
                  example: 'example' in item ? (item.example as string) : "",
                  result: 'result' in item ? (item.result as string) : "",
                  resultDescription: 'resultDescription' in item ? (item.resultDescription as string) : "",
                  slug: 'slug' in item ? (item.slug) : "",
                  resultLabel: 'resultLabel' in item ? (item.resultLabel as string) : "",
                  resultOptions: 'resultOptions' in item ? (item.resultOptions as { label: string; value: string; }[]) : [],
                  note: 'note' in item ? (item.note as string) : "",
                },
              ]}
            />
          ))
        }
      </div>

      <Button
        size="sm"
        className="
        rounded-full
        bottom-16
        right-4
        sm:right-6
        md:right-8
        lg:right-12
        bg-[#FF66C4] 
        hover:bg-[#BB3186]
        hover:outline 
        hover:outline-[1px]
        hover:outline-white
        absolute 
        "
        onClick={() => {
          document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ArrowUpIcon />
      </Button>
    </IonLayout>
  );
}