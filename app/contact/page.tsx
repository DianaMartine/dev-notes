import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { IonBreadcrumb } from "../shared/components/ion-breadcrumb/ion-breadcrumb";
import IonLayout from "../shared/components/ion-layout/ion-layout";
import { IonPageInfo } from "../shared/components/ion-page-info/ion-page-info";

export default function Contact() {
  return (
    <IonLayout>
      <IonBreadcrumb
        navLinks={[
          {
            title: "Home",
            href: "/",
            nested: [
              {
                title: "Contato",
              },
            ],
          },
        ]}
      />

      <IonPageInfo title="Contato" description="Você pode nos achar em:">
        <ul
          className="
flex
flex-col
gap-4
"
        >
          <li>
            <Link
              className="flex items-center gap-2"
              href="https://github.com/div-group-official"
            >
              <GitHubLogoIcon width={24} height={24} />
              GitHub
            </Link>
          </li>
          <li>
            <Link href="mailto:divisiontechgroup@gmail.com">
              divisiontechgroup@gmail.com
            </Link>
          </li>
        </ul>
      </IonPageInfo>
    </IonLayout>
  );
}
