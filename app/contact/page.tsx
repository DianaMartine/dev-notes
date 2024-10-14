import pages from "@/app/shared/data/pages.json";
import routes from "@/app/shared/data/routes.json";
import socialLinks from "@/app/shared/data/socialLinks.json";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
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
            title: routes.home.title,
            href: routes.home.url,
            nested: [
              {
                title: routes.contact.title,
              },
            ],
          },
        ]}
      />

      <IonPageInfo
        title={pages.contact.title}
        description={pages.contact.description}
      >
        <ul
          className="
          flex-col
          gap-4
          flex
          "
        >
          <li>
            <Link
              className="
              flex 
              items-center 
              gap-2
              "
              href={socialLinks.github.url}
            >
              <GitHubLogoIcon
                width={24}
                height={24}
              />
              {socialLinks.github.title}
            </Link>
          </li>
          <li>
            <Link
              href={socialLinks.email.url}
            >
              {socialLinks.email.title}
            </Link>
          </li>
        </ul>
      </IonPageInfo>
    </IonLayout>
  );
}
