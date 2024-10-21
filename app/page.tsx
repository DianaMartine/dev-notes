"use client";
import data from "@/app/shared/data/data.json";
import IonLayout from "./shared/components/ion-layout/ion-layout";
import { IonTopic } from "./shared/components/ion-topic/ion-topic";

export default function Home() {
  return (
    <IonLayout>
      <div
        className="
        grid
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-4
        "
      >
        {data.topics.map((topic) => (
          <IonTopic
            key={topic.slug}
            icon={topic.icon}
            title={topic.title}
            description={topic.description}
            slug={topic.slug}
            subtitle={topic.subtitle}
          />
        ))}
      </div>
    </IonLayout>
  );
}
