'use client';
import { IonBreadcrumb } from "@/app/shared/components/ion-breadcrumb/ion-breadcrumb";
import IonLayout from "@/app/shared/components/ion-layout/ion-layout";
import { IonPageInfo } from "@/app/shared/components/ion-page-info/ion-page-info";
import { TopicProps } from "@/app/shared/components/types";
import { IonHeading } from "@/app/shared/components/typo/ion-heading/ion-heading";
import { IonParagraph } from "@/app/shared/components/typo/ion-paragraph/ion-paragraph";
import data from "@/app/shared/data/data.json";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

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
      <IonBreadcrumb navLinks={[
        {
          title: "Home",
          href: "/",
          nested: [
            {
              title: currentTopic.topic.title
            }
          ]
        }
      ]} />

      <IonPageInfo
        title={currentTopic.topic.title}
        subtitle={currentTopic.topic.subtitle}
        description={currentTopic.topic.description}
      />

      <div className="
            space-y-4
            ">
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