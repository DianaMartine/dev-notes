import { IonBreadcrumb } from "../shared/components/ion-breadcrumb/ion-breadcrumb";
import IonLayout from "../shared/components/ion-layout/ion-layout";
import { IonPageInfo } from "../shared/components/ion-page-info/ion-page-info";

export default function Contact() {
    return (
        <IonLayout>
            <IonBreadcrumb navLinks={[
                {
                    title: "Home",
                    href: "/",
                    nested: [
                        {
                            title: "Contact"
                        }
                    ]
                },
            ]} />

            <IonPageInfo
                title="Contact"
                description="You can contact us at:">
                <ul>
                    <li>
                        <a href="mailto:divisiontechgroup@gmail.com">
                            divisiontechgroup@gmail.com
                        </a>
                    </li>
                </ul>
            </IonPageInfo>
        </IonLayout>
    )
};