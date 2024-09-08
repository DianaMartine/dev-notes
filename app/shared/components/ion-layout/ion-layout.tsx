import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { IonHeader } from "../ion-header/ion-header";

export default function IonLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="
        w-screen 
        h-screen 
        bg-[#0D0126] 
        text-white 
        p-4
        overflow-y-auto
        ">
            <IonHeader navLinks={[
                { title: "Home", href: "/" },
                { title: "Sobre", href: "/about" },
                { title: "Contato", href: "/contact" },
            ]}
                socialLinks={[
                    { title: "GitHub", href: "https://github.com/division-group", icon: <GitHubLogoIcon /> },
                ]} />
            <main className="
            p-4
            flex
            flex-col
            gap-4
            ">{children}</main>
            <footer className="
            p-4 
            text-center 
            text-xs 
            relative
            bottom-0
            ">
                <p>&copy; 2024 Div Group</p>
            </footer>
        </div>
    );
}