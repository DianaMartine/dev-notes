'use client'
import { Header } from "@/app/shared/components/header/header";
import {
  useParams
} from "next/navigation";
import { Heading } from '../../../shared/components/typo/heading/heading';
import { Paragraph } from '../../../shared/components/typo/paragraph/paragraph';
import data from '../../../shared/data/data.json';

export default function Topic() {
  const { slug, content } = useParams();
  const slugData = data.topics.find((topic) => topic.title.toLowerCase() === slug);
  const contentData = slugData?.content?.find((item) => item.slug === content);

  return (
    <>
      <Header />
      <div className="bg-[#202020] text-white flex flex-col p-2 gap-4">
        <hr />
        <div id="title" className="flex">
          <Heading level={1}>
            {contentData?.title}
          </Heading>
        </div>
        <Paragraph size="medium">
          {contentData?.description}
        </Paragraph>
        <hr />
        {contentData?.content?.map((item, index) => (
          <div key={index}>
            {item.title && <Heading level={2}>{item.title}</Heading>}
            {item.tag && (
              <Heading level={3}>
                {item.tag}
              </Heading>
            )}
            <Paragraph size="small">
              {item.description}
            </Paragraph>
            {
              item.example && (
                <div>
                  <Paragraph size="small">Exemplo:</Paragraph>
                  <pre>
                    <code>
                      {item.example}
                    </code>
                  </pre>
                </div>
              )
            }
          </div>
        ))}
      </div>
    </>
  );
}