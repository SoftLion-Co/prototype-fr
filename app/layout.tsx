import './../styles/main.scss';
import HeaderComponent from '../components/HeaderComponent'
import "./../styles/main.scss";
import { FooterComp } from "@/components/FooterComponent";

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
      <body className="container">
      <HeaderComponent/>
        {children}
        <FooterComp />
      </body>
    </html>
  );
}
