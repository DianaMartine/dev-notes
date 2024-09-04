import { IonBreadcrumb } from "../shared/components/ion-breadcrumb/ion-breadcrumb";
import IonLayout from "../shared/components/ion-layout/ion-layout";
import { IonPageInfo } from "../shared/components/ion-page-info/ion-page-info";

export default function About() {
    return (
        <IonLayout>
            <IonBreadcrumb navLinks={[
                {
                    title: "Home",
                    href: "/",
                    nested: [
                        {
                            title: "About"
                        }
                    ]
                }
            ]} />

            <IonPageInfo
                title="About"
                description="This is a dictionary of developer terms. It is a project by Div Group." />
        </IonLayout>
    )
};