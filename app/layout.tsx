import HeaderComponent from "../components/HeaderComponent";
import "./../styles/main.scss";
import FooterComponent from "@/components/FooterComponent";
import s from "./layout.module.scss";
import Head from "next/head";
export const metadata = {
  title: "SoftLion",
  description:
    "Embrace the Lion's Share Technological Advancements with SoftLion",
};

export default function RootLayout({
  children,
}: // session
{
  // session: Session;
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
        <div className={s.main}>
          <HeaderComponent />
          <div className={s.page} id="layout">
            {children}
          </div>
          <FooterComponent />
        </div>
        <div id="modalRoot"></div>
      </body>
    </html>
  );
}
