import common from "@/app/shared/data/common.json";
import routes from "@/app/shared/data/routes.json";
import socialLinks from "@/app/shared/data/socialLinks.json";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { IonHeader } from "../ion-header/ion-header";

export default function IonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="
      h-screen 
      bg-[#0D0126] 
      text-white 
      p-4
      overflow-y-auto
      w-screen 
      "
    >
      <IonHeader
        navLinks={[
          { title: routes.home.title, href: routes.home.url },
          { title: routes.about.title, href: routes.about.url },
          { title: routes.contact.title, href: routes.contact.url },
        ]}
        socialLinks={[
          {
            title: socialLinks.github.title,
            href: socialLinks.github.url,
            icon: <GitHubLogoIcon />,
          },
        ]}
      />
      <main
        className="
        flex
        flex-col
        gap-4
        p-4
        "
      >
        {children}
      </main>
      <footer
        className="
        text-center 
        text-xs 
        relative
        bottom-0
        p-4 
        "
      >
        <p>
          &copy; {new Date().getFullYear()} {common.companyName}. {common.allRightsReserved}.
        </p>
      </footer>
    </div>
  );
}
