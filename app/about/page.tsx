import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import IonLayout from "../shared/components/ion-layout/ion-layout";
import { IonHeading } from "../shared/components/typo/ion-heading/ion-heading";
import { IonParagraph } from "../shared/components/typo/ion-paragraph/ion-paragraph";
import { IonCaption } from "../shared/components/typo/ion-caption/ion-caption";

export default function About() {
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
                            About
                        </IonCaption>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="
            space-y-4
            ">
                <IonHeading level={1}>
                    About
                </IonHeading>
                <IonParagraph size="medium">
                    This is a dictionary of developer terms. It is a project by Div Group.
                </IonParagraph>
            </div>
        </IonLayout>
    )
};