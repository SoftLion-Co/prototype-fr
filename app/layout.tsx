import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import "./../styles/main.scss";
import s from "./layout.module.scss";

export const metadata = {
  title: "SoftLion",
  description:
    "Embrace the Lion's Share Technological Advancements with SoftLion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="софтлайон, web-company, shopify, development, outsourcing, programming outsourcing"
        />
        <meta name="robots" content="noimageindex" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
      </head>

      <body>
        <HeaderComponent />
        <main className={s.page} id="layout">
          {children}
        </main>
        <FooterComponent />
        <div id="modalRoot"></div>
      </body>
    </html>
  );
}
