"use client";
import { IonBreadcrumb } from "@/app/shared/components/ion-breadcrumb/ion-breadcrumb";
import { IonCombobox } from "@/app/shared/components/ion-combobox/ion-combobox";
import { IonDialog } from "@/app/shared/components/ion-dialog/ion-dialog";
import IonLayout from "@/app/shared/components/ion-layout/ion-layout";
import { IonPageInfo } from "@/app/shared/components/ion-page-info/ion-page-info";
import { IonHeading } from "@/app/shared/components/typo/ion-heading/ion-heading";
import { IonParagraph } from "@/app/shared/components/typo/ion-paragraph/ion-paragraph";
import data from "@/app/shared/data/data.json";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useParams } from "next/navigation";
import { useState } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Content() {
  const { slug, content } = useParams();
  const slugData = data.topics.find(
    (topic) => topic.title.toLowerCase() === slug,
  );
  const contentData = slugData?.content?.find((item) => item.slug === content);

  const [currentContent] = useState({
    content: {
      title: contentData?.title || "",
      description: contentData?.description || "",
    },
  });

  return (
    <IonLayout>
      <IonBreadcrumb
        navLinks={[
          {
            title: "Home",
            href: "/",
            nested: [
              {
                title: slugData?.title || "",
                href: `/topics/${slug}`,
                nested: [
                  {
                    title: contentData?.title || "",
                  },
                  {
                    title: (
                      slugData?.content
                        ?.filter((item) => item.slug !== contentData?.slug)
                        .map((item) => item.title) || []
                    ).join(", "),
                    href: `/topics/${slug}/${slugData?.content?.filter((item) => item.slug !== contentData?.slug)[0].slug}`,
                  },
                ],
              },
            ],
          },
        ]}
      />
      <IonPageInfo
        title={currentContent.content.title}
        description={currentContent.content.description}
      />

      <div className="space-y-4">
        <IonHeading level={2}>Sumário:</IonHeading>

        <ol
          className="
flex
flex-col
gap-4
list-decimal
pl-4
"
        >
          {contentData?.content?.map((item, index) => (
            <li
              key={index}
              className="
hover:text-[#922AC7]
"
            >
              {item.title && <a href={`#${item.slug}`}>{item.title}</a>}
            </li>
          ))}
        </ol>
        <hr />

        <ul
          className="
flex
flex-col
gap-4
list-disc
"
        >
          {contentData?.content?.map((item, index) => (
            <li
              key={index}
              id={`${item.slug}`}
              className="
flex
flex-col
gap-2
"
            >
              {item.title && <IonHeading level={2}>{item.title}</IonHeading>}
              <IonParagraph size="small">{item.description}</IonParagraph>
              {"example" in item && item.example && (
                <div>
                  <IonParagraph size="small">Exemplo:</IonParagraph>
                  <Markdown
                    components={{
                      code(props) {
                        const { children, className, node, ...rest } = props;
                        const match = /language-(\w+)/.exec(className || "");
                        return match ? (
                          <SyntaxHighlighter
                            language={match[1]}
                            style={atomDark}
                            customStyle={{
                              fontSize: "14px",
                              padding: "1rem",
                              borderRadius: "0.5rem",
                              backgroundColor: "#202020",
                            }}
                            showLineNumbers={true}
                            PreTag={"div"}
                          >
                            {String(children).replace(/\n$/, "")}
                          </SyntaxHighlighter>
                        ) : (
                          <code {...rest} className={className}>
                            {children}
                          </code>
                        );
                      },
                    }}>
                    {item.example}
                  </Markdown>
                </div>
              )}
              {"result" in item && item.result && (
                <div
                  className="
                flex
                flex-col
                gap-2
                "
                >
                  {
                    item.result.includes("<IonAlertDialog/>") && (
                      <>
                        <IonParagraph size="small">Clique no texto abaixo para ver o resultado:</IonParagraph>
                        <IonDialog
                          triggerLabel="Clique aqui para ver o resultado"
                          title="Resultado"
                          description={item.resultDescription as string}
                        />
                      </>
                    )
                  }
                  {
                    item.result.includes("<IonDialog/>") && (
                      <>
                        <IonParagraph size="small">Clique no texto abaixo para ver o resultado:</IonParagraph>
                        <IonDialog
                          triggerLabel="Clique aqui para ver o resultado"
                          title="Resultado"
                          description={item.resultDescription as string} />
                      </>
                    )
                  }
                  {
                    item.result.includes("<IonCombobox/>") && (
                      <>
                        <IonParagraph size="small">Resultado:</IonParagraph>
                        <IonCombobox
                          label={item.resultLabel as string}
                          options={
                            item.resultOptions?.map((option: { label: string; value: string }) => {
                              return { value: option.value, label: option.label };
                            }) as { value: string; label: string }[]
                          }
                          value={""}
                          onChange={(currentValue: string) => {
                            console.log(currentValue);
                          }}
                        />
                      </>
                    )
                  }

                  {
                    (
                      !item.result.includes("<IonAlertDialog/>") &&
                      !item.result.includes("<IonDialog/>") &&
                      !item.result.includes("<IonCombobox/>")
                    ) && (
                      <>
                        <IonParagraph size="small">Resultado:</IonParagraph>
                        <div
                          dangerouslySetInnerHTML={{ __html: item.result }}
                          className={`
                          bg-[#202020]
                          p-4
                          rounded-md
                          ${item.result.includes("<a>") && `
                            cursor-pointer
                            hover:text-[#922AC7]
                            `}
                          `}
                        />
                      </>
                    )
                  }
                </div>
              )}
              {"note" in item && item.note && (
                <div
                  className="
                  flex
                  flex-col
                  gap-2
                  "
                >
                  <div className="
                  flex
                  gap-2
                  items-center
                  ">
                    <InfoCircledIcon />
                    <IonParagraph size="small">Nota:</IonParagraph>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.note }}
                  />
                </div>
              )}
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </IonLayout>
  );
}