import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style/application.scss";
import Favicon from "../../components/Favicon";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
