import type { Metadata } from "next";
import "./globals.css";
import common from "@/app/shared/data/common.json"
import socialLinks from "@/app/shared/data/socialLinks.json"

export const metadata: Metadata = {
  title: common.projectMainTitle,
  description: common.projectDescription,
  applicationName: common.projectMainTitle,
  category: "Development",
  keywords: ["development", "dictionary", "terms"],
  authors: [
    {
      name: common.companyName,
      url: socialLinks.github.url,
    },
    {
      name: socialLinks.githubPersonal.title,
      url: socialLinks.githubPersonal.url,
    },
  ],
  icons: [
    {
      rel: "icon",
      url: `${socialLinks.github.title}.png`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // todo: implements translations
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
