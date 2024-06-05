import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style/application.scss";
import Favicon from "../../components/favicon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehmet Kisacik",
  description: "Portfolio of Mehmet Kisacik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Favicon></Favicon>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
