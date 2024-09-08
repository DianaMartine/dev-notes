'use client';
import { IonBreadcrumb } from "@/app/shared/components/ion-breadcrumb/ion-breadcrumb";
import IonLayout from "@/app/shared/components/ion-layout/ion-layout";
import { IonPageInfo } from "@/app/shared/components/ion-page-info/ion-page-info";
import { IonTopic } from "@/app/shared/components/ion-topic/ion-topic";
import { TopicProps } from "@/app/shared/components/types";
import data from "@/app/shared/data/data.json";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Topics() {
  const { slug } = useParams();
  const slugData = data.topics.find((topic) => topic.title.toLowerCase() === slug);

  const [currentTopic] = useState<TopicProps>({
    title: slugData?.title || "",
    subtitle: slugData?.subtitle || "",
    description: slugData?.description || "",
    icon: slugData?.icon || "",
  });

  return (
    <IonLayout>
      <IonBreadcrumb navLinks={[
        {
          title: "Home",
          href: "/",
          nested: [
            {
              title: currentTopic.title,
            }
          ]
        }
      ]} />

      <IonPageInfo
        title={currentTopic.title}
        subtitle={currentTopic.subtitle}
        description={currentTopic.description}
      />

      <div className="
      grid
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-4">
        {slugData?.content.map((topic, index) => (
          <IonTopic
            key={index}
            title={topic.title}
            description={topic.description}
            slug={`${slug}/${topic.slug}`}
          />
        ))}
      </div>

    </IonLayout>
  );
}