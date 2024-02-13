import Head from "next/head";
import "./../styles/main.scss";
import classNames from "classnames";
import s from "./layout.module.scss";

import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

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
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>

      <Head>
        <meta
          name="description"
          content="SoftLion - Your Trusted Partner in IT Services and Consulting. We provide web development, consulting, and technology solutions to drive your business growth."
        />

        <meta
          name="keywords"
          content="софтлайон, web-company, shopify, development, outsourcing, programming outsourcing"
        />
      </Head>

      <body>
        <HeaderComponent />
        <main className={classNames(s.page, s.main)} id="layout">
          {children}
        </main>
        <FooterComponent />
        <div id="modalRoot"></div>
      </body>
    </html>
  );
}
