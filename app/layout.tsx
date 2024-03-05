import Head from "next/head";
import "./../styles/main.scss";
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
      <Head>
        <title>{metadata.title}</title>
        <meta
          name="description"
          content="Embrace the Lion's Share Technological Advancements with SoftLion"
          key="desc"
        />
        <meta
          name="keywords"
          content="софтлайон, web-company, shopify, development, outsourcing, programming outsourcing"
        />
        <meta property="og:title" content="SoftLion - E-commerce" />
        <meta
          property="og:description"
          content="Embrace the Lion's Share Technological Advancements with SoftLion"
        />
        <meta property="og:image" content="noimageindex" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

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
