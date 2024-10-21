import common from "@/app/shared/data/common.json";
import { forwardRef } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IonDialog } from "../ion-dialog/ion-dialog";
import { ContentProps } from "../types";
import { IonHeading } from "../typo/ion-heading/ion-heading";
import { IonParagraph } from "../typo/ion-paragraph/ion-paragraph";
import { IonCombobox } from "../ion-combobox/ion-combobox";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { IonInput } from "../ion-input/ion-input";

const ItemResult: React.FC<{
    result: string,
    resultDescription: string,
    resultLabel?: string,
    resultOptions?: {
        label: string;
        value: string;
    }[];
}> = ({
    result,
    resultDescription,
    resultLabel,
    resultOptions
}) => {
        switch (result) {
            case "<IonAlertDialog/>":
            case "<IonDialog/>":
                return (
                    <>
                        <IonParagraph size="small">{common.result}</IonParagraph>
                        <IonParagraph size="small">{common.clickMeToSeeResult}</IonParagraph>
                        <IonDialog
                            triggerLabel={common.clickMeToSeeResult}
                            title={common.result}
                            description={resultDescription}
                        />
                    </>
                );
            case "<IonCombobox/>":
                return (
                    <>
                        <IonParagraph size="small">{common.result}</IonParagraph>
                        <IonParagraph size="small">{common.clickMeToSeeResult}</IonParagraph>
                        <IonCombobox
                            label={resultLabel ?? common.selectOption}
                            options={resultOptions ?? []}
                            value={""}
                            onChange={function (value: string): void {
                                throw new Error("Function not implemented.");
                            }}
                        />
                    </>
                );
            case "<IonForm/>":
                return (
                    <>
                        <IonParagraph size="small">{common.result}</IonParagraph>
                        <form
                            className="
                            space-y-4
                            flex-col
                            gap-2
                            "
                        >
                            <IonInput
                                label={common.emailInput}
                                type="email"
                            />
                            <IonInput
                                label={common.passwordInput}
                                type="password"
                            />
                            <IonInput
                                label={common.actionInput}
                                type="submit"
                            />
                        </form>
                    </>
                );
            case "<IonFieldset/>":
                return (
                    <>
                        <IonParagraph size="small">{common.result}</IonParagraph>
                        <fieldset
                            className="
                            space-y-4
                            flex-col
                            gap-2
                            "
                        >
                            <legend>{common.filedsetLabel}</legend>
                            <IonInput
                                label={common.emailInput}
                                type="email"
                            />
                        </fieldset>
                    </>
                );
                default:
                return <>
                    <IonParagraph size="small">{common.result}</IonParagraph>
                    <div
                        dangerouslySetInnerHTML={{ __html: result }}
                        className={`
                        bg-[#202020]
                        p-4
                        rounded-md
                        `}
                    />
                </>
        }
    }

const ItemNote: React.FC<{ note: string }> = ({ note }) => {
    return (
        <div className="
            space-y-2
            flex
            flex-col
            gap-2
            bg-[#202020]
            p-4
            rounded-md
            "
        >
            <div className="
                flex
                gap-2
                items-center
                "
            >

                <InfoCircledIcon />
                <IonParagraph size="small">
                    {common.note}
                </IonParagraph>
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: note }}
                className="
                p-4
                "
            />
        </div>
    );

}

const CodeBlock: React.FC<{ className?: string; children?: React.ReactNode }> = ({ children, className, ...rest }) => {
    const match = /language-(\w+)/.exec(className ?? "");
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
};

const CodeComponent: React.FC<{ className?: string; children?: string }> = ({ className, children, ...props }) => {
    return <CodeBlock className={className} {...props}>{children}</CodeBlock>;
};

export const IonContent = forwardRef<HTMLDivElement, ContentProps>(
    ({ title, description, content, bgColor, textColor }, ref) => {
        return (
            <div
                ref={ref}
                className="
                space-y-4
                flex-col
                gap-2
                "
                style={{
                    backgroundColor: bgColor,
                    color: textColor,
                }}
            >
                {content && (
                    <>
                        {
                            content.map((item) => (
                                <div
                                    key={item.slug}
                                    id={item.slug}
                                    className="
                                    space-y-2
                                    flex
                                    flex-col
                                    gap-2
                                    "
                                >
                                    <IonHeading level={2} bgColor={bgColor} textColor={textColor}>
                                        {title}
                                    </IonHeading>
                                    <IonParagraph size="medium" textColor={textColor} bgColor={bgColor}>
                                        {description}
                                    </IonParagraph>
                                    {
                                        item.example && item.example !== "" && (
                                            <div key={item.example}>
                                                <IonParagraph size="small">{common.example}</IonParagraph>
                                                <Markdown
                                                    components={{
                                                        code: CodeComponent as any,
                                                    }}>
                                                    {item.example}
                                                </Markdown>
                                            </div>
                                        )
                                    }
                                    {
                                        item.result && item.result !== "" && (
                                            <ItemResult
                                                result={item.result}
                                                resultDescription={item.resultDescription ?? ""}
                                                resultLabel={item.resultLabel ?? ""}
                                                resultOptions={item.resultOptions ?? []}
                                            />
                                        )
                                    }
                                    {
                                        item.note && item.note !== "" && (
                                            <ItemNote note={item.note} />
                                        )
                                    }
                                </div>
                            ))
                        }
                    </>
                )}
                <hr />
            </div>
        );
    },
);

IonContent.displayName = "IonContent";

IonContent.displayName = "IonContent";
