import "./../styles/main.scss";
import HeaderComponent from "../components/HeaderComponent";
import "./../styles/main.scss";
import { FooterComp } from "@/components/FooterComponent";
import HomeBlog from "@/components/blog/HomeBlog";

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
      <body>
        <HeaderComponent />
        {children}
        <FooterComp />
      </body>
    </html>
  );
}
