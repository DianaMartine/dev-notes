'use client';
import IonLayout from "@/app/shared/components/ion-layout/ion-layout";
import { TopicProps } from "@/app/shared/components/types";
import { useParams } from "next/navigation";
import { useState } from "react";
import data from "@/app/shared/data/data.json";
import { IonCaption } from "@/app/shared/components/typo/ion-caption/ion-caption";
import { IonHeading } from "@/app/shared/components/typo/ion-heading/ion-heading";
import { IonParagraph } from "@/app/shared/components/typo/ion-paragraph/ion-paragraph";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function Topics() {
  const { slug } = useParams();
  const slugData = data.topics.find((topic) => topic.title.toLowerCase() === slug);

  const [currentTopic] = useState<TopicProps>({
    topic: {
      title: slugData?.title || "",
      subtitle: slugData?.subtitle || "",
      description: slugData?.description || "",
      icon: slugData?.icon || "",
    },
  });

  return (
    <IonLayout>
      <Breadcrumb className="
            py-4
            ">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="
            hover:text-[#922AC7]
            ">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <IonCaption size="small">
              {currentTopic.topic.title}
            </IonCaption>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="
            space-y-4
            ">
        <IonHeading level={1}>
          {currentTopic.topic.title}
        </IonHeading>
        <IonParagraph size="medium">
          {currentTopic.topic.subtitle}
        </IonParagraph>
        <IonParagraph size="medium">
          {currentTopic.topic.description}
        </IonParagraph>
        <hr />

        <IonHeading level={2}>
          Conteúdo:
        </IonHeading>
        <ul className="
                flex
                flex-col
                gap-4
                list-disc
                pl-4
                ">
          {slugData?.content?.map((item, index) => {
            const {
              title: itemTitle,
              description: itemDescription,
              slug: itemSlug,
            } = item;
            
            return (
              <Link href={`/topics/${slug}/${itemSlug}`}
                key={index}>
                <li key={index}>
                  <IonHeading level={2}>
                    {itemTitle}
                  </IonHeading>
                  <IonParagraph size="small">
                    {itemDescription}
                  </IonParagraph>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </IonLayout>
  );
}