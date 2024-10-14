import pages from "@/app/shared/data/pages.json";
import routes from "@/app/shared/data/routes.json";
import { IonBreadcrumb } from "../shared/components/ion-breadcrumb/ion-breadcrumb";
import IonLayout from "../shared/components/ion-layout/ion-layout";
import { IonPageInfo } from "../shared/components/ion-page-info/ion-page-info";

export default function About() {
  return (
    <IonLayout>
      <IonBreadcrumb
        navLinks={[
          {
            title: routes.home.title,
            href: routes.home.url,
            nested: [
              {
                title: routes.about.title,
              },
            ],
          },
        ]}
      />

      <IonPageInfo
        title={pages.about.title}
        description={pages.about.description}
      />
    </IonLayout>
  );
}
