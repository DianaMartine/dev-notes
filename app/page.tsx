import data from "@/app/shared/data/data.json";
import Link from "next/link";
import { Card } from "./shared/components/card/card";
import { Heading } from "./shared/components/typo/heading/heading";
import { Footer } from "./shared/components/footer/footer";
import { Paragraph } from "./shared/components/typo/paragraph/paragraph";
import { ImageComponent } from "./shared/components/image-component/image-component";
import { Header } from "./shared/components/header/header";

export default function Home() {
  return (
    <>
    <Header/>
      <main className="bg-[#202020] w-full h-[100vh] flex flex-col gap-4 p-4">
        <div className="flex gap-4 flex-wrap">
          {
            data.topics.map((topic) => (
              <Link href={{
                pathname: `/topics/${topic.title.toLowerCase()}`,
              }}
                key={topic.title}
                target="_blank">
                <Card
                  key={topic.title}
                  title={topic.title}
                  subtitle={topic.subtitle}
                  format="rounded"
                  avatar={topic.icon}
                  avatarOptions={{
                    alt: topic.title,
                    format: "badge",
                    size: "small",
                    filter: "none",
                    fit: "cover",
                  }}
                  size="small"
                  hover
                />
              </Link>
            ))
          }
        </div>
      </main>
      <Footer bgColor="#202020" textColor="white">
        <Paragraph size="xsmall">
          © 2024 Diana Martine. All rights reserved.
        </Paragraph>
      </Footer>
    </>
  );
}
