'use client';
import data from "@/app/shared/data/data.json";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import IonLayout from "./shared/components/ion-layout/ion-layout";
import { IonTopic } from "./shared/components/ion-topic/ion-topic";

export default function Home() {
  return (
    <IonLayout>
      <div className="
      grid
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-4
      ">
        {data.topics.map((topic, index) => (
          <IonTopic
            key={index}
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
