'use client';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import IonLayout from "./shared/components/ion-layout/ion-layout";
import data from "@/app/shared/data/data.json"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <IonLayout>
      <div className="
      flex
      flex-col
      gap-4
      ">
        {
          data.topics.map((topic, index) => (
            <Card key={index}>
              <CardHeader>
                <Image 
                className="
                relative
                top-[-1rem]
                right-[1.2rem]
                " 
                src={topic.icon} 
                alt={topic.subtitle} 
                width={48}
                height={32}
                style={{
                  width: "48px",
                  height: "32px"
                }}
                />
                <CardTitle>
                  {topic.title}
                </CardTitle>
                <CardDescription>
                  {topic.subtitle}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/topics/${topic.slug}`}>
                  View Topic
                </Link>
              </CardFooter>
            </Card>
          ))
        }
      </div>

    </IonLayout>
  );
}
