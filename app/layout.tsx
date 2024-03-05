import React from "react";
import { Helmet } from "react-helmet";

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
      {/* <Helmet>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="софтлайон, web-company, shopify, development, outsourcing, programming outsourcing"
        />
        <meta name="robots" content="noimageindex" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
      </Helmet> */}

      <Helmet>
        <meta name="description" content={metadata.description} />
        <meta
          property="og:description"
          content="Embrace the Lion's Share Technological Advancements with SoftLion"
        />
        <meta property="og:image" content="" />
        <meta name="robots" content="noimageindex" />
      </Helmet>

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
