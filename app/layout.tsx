import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Dictionary",
  description: "A dictionary of developer terms",
  applicationName: "Dev Dictionary",
  category: "Development",
  keywords: ["development", "dictionary", "terms"],
  authors: [{
    name: "Division Group",
    url: "https://github.com/division-group",
  },
  {
    name: "Diana Martine",
    url: "https://github.com/dianamartine",
  }],
  icons: [
    {
      rel: "icon",
      url: "https://github.com/division-group.png",
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
