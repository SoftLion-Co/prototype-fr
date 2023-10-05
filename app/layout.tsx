import HeaderComponent from "../components/HeaderComponent";
import "./../styles/main.scss";
import FooterComponent from "@/components/FooterComponent";
import s from "./layout.module.scss";

export const metadata = {
  title: "SoftLion",
  description: "Embrace the Lion's Share Technological Advancements with SoftLion",
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
      <body>
        <HeaderComponent />
        <div className={s.page} id="layout">
          {children}
        </div>
        <FooterComponent />

        <div id="modalRoot"></div>
      </body>
    </html>
  );
}
