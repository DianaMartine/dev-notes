'use client';
import IonLayout from "@/app/shared/components/ion-layout/ion-layout";
import { IonHeading } from "@/app/shared/components/typo/ion-heading/ion-heading";
import { IonParagraph } from "@/app/shared/components/typo/ion-paragraph/ion-paragraph";
import data from "@/app/shared/data/data.json";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from 'react';
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Content() {
  const { slug, content } = useParams();
  const slugData = data.topics.find((topic) => topic.title.toLowerCase() === slug);
  const contentData = slugData?.content?.find((item) => item.slug === content);

  const [currentContent] = useState({
    content: {
      title: contentData?.title || "",
      description: contentData?.description || "",
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
          <BreadcrumbLink href={`/topics/${slug}`} className="
            hover:text-[#922AC7]
            ">
            {slugData?.title}
          </BreadcrumbLink>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              ...{contentData?.title}
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="
            bg-[#202020]
            text-white
            ">
              <DropdownMenuItem>
                {contentData?.title}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/topics/${slug}/${contentData?.slug}`}>
                  {
                    //pegue o link de introdução e coloque aqui
                    slugData?.content?.filter((item) => item.slug !== contentData?.slug).map((item) => (
                      <Link key={item.slug} href={`/topics/${slug}/${item.slug}`}>
                        {item.title}
                      </Link>
                    ))
                  }
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="
            space-y-4
            ">
        <hr />
        <IonHeading level={1}>
          {currentContent.content.title}
        </IonHeading>
        <IonParagraph size="medium">
          {currentContent.content.description}
        </IonParagraph>
        <hr />

        <IonHeading level={2}>
          Sumário:
        </IonHeading>

        <ol className="
        flex
        flex-col
        gap-4
        list-decimal
        pl-4
        ">
          {contentData?.content?.map((item, index) => (
            <li key={index} className="
            hover:text-[#922AC7]
            ">
              {item.title && <a href={`#${item.slug}`}>{item.title}</a>}
            </li>
          ))}
        </ol>
        <hr />

        <ul className="
        flex
        flex-col
        gap-4
        list-disc
        pl-4
        ">
          {contentData?.content?.map((item, index) => (
            <li key={index} id={`${item.slug}`} className="
            flex
            flex-col
            gap-2
            ">
              {item.title && <IonHeading level={2}>{item.title}</IonHeading>}
              <IonParagraph size="small">
                {item.description}
              </IonParagraph>
              {
                ('example' in item) && item.example && (
                  <div>
                    <IonParagraph size="small">Exemplo:</IonParagraph>
                    <Markdown
                      children={item.example}
                      components={{
                        code(props) {
                          const { children, className, node, ...rest } = props
                          const match = /language-(\w+)/.exec(className || '')
                          return match ? (
                            <SyntaxHighlighter
                            language={match[1]}
                            style={atomDark}
                            customStyle={{
                              fontSize: "14px",
                              padding: "1rem",
                              borderRadius: "0.5rem",
                              backgroundColor: "#202020",
                            }
                            }
                            showLineNumbers={true}
                            PreTag={"div"}
                            children={String(children).replace(/\n$/, '')}
                            />) : (
                            <code {...rest} className={className}>
                              {children}
                            </code>
                          )
                        }
                      }}
                    />
                  </div>
                )
              }
            {
              ('result' in item) && item.result && (
                <div>
                  <IonParagraph size="small">Resultado:</IonParagraph>
                  <div dangerouslySetInnerHTML={{ __html: item.result }} style={{
                    backgroundColor: "#202020",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                  }}/>
                </div>
              )
            }
              {
                ('note' in item) && item.note && (
                  <div className="
                  flex
                  gap-2
                  items-center
                  ">
                    <InfoCircledIcon className="w-6 h-6" />
                    <IonParagraph size="small">{item.note}</IonParagraph>
                  </div>
                )
              }
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </IonLayout>
  );
}