'use client'
import {
  useParams
} from "next/navigation";
import React, { useState } from "react";
import type { TopicProps } from "../../shared/components/types";
import { Heading } from "../../shared/components/typo/heading/heading";
import { Paragraph } from "../../shared/components/typo/paragraph/paragraph";
import data from "../../shared/data/data.json";
import { ImageComponent } from "@/app/shared/components/image-component/image-component";
import Link from "next/link";
import { Header } from "@/app/shared/components/header/header";

export default function Topic() {
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
    <>
      <Header />
      <div className="bg-[#202020] text-white flex flex-col p-2 gap-4">
        <hr />

        <div id="title" className="flex">
          <Heading level={1}>
            {currentTopic.topic.title}
          </Heading>
          <ImageComponent src={currentTopic.topic.icon} alt={currentTopic.topic.title} format="flat" size="small" />
        </div>
        <Paragraph size="medium">
          {currentTopic.topic.subtitle}
        </Paragraph>
        <Paragraph size="medium">
          {currentTopic.topic.description}
        </Paragraph>
        <hr />

        <div id="content" className="flex flex-col gap-4">
          <Heading level={2}>
            Conteúdo:
          </Heading>
          <ul>
            {slugData?.content?.map((item, index) => (
              <Link href={`/topics/${slug}/${item.slug}`}
               key={index}>
                <li key={index}>
                  <Heading level={2}>
                    {item.title}
                  </Heading>
                  <Paragraph size="small">
                    {item.description}
                  </Paragraph>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}