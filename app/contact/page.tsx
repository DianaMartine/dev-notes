import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import IonLayout from "../shared/components/ion-layout/ion-layout";
import { IonHeading } from "../shared/components/typo/ion-heading/ion-heading";
import { IonParagraph } from "../shared/components/typo/ion-paragraph/ion-paragraph";
import { IonCaption } from "../shared/components/typo/ion-caption/ion-caption";

export default function Contact() {
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
                    <BreadcrumbItem>
                        <IonCaption size="small">
                            Contact
                        </IonCaption>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="
            space-y-4
            ">
                <IonHeading level={1}>
                    Contact
                </IonHeading>
                <IonParagraph size="medium">
                    You can contact us at:
                </IonParagraph>
                <ul>
                    <li>
                        <a href="mailto:divisiontechgroup@gmail.com">
                            divisiontechgroup@gmail.com
                        </a>
                    </li>
                </ul>
            </div>
        </IonLayout>
    )
};