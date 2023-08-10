'use client';
import "./../styles/main.scss";
import HeaderComponent from "../components/HeaderComponent";
import "./../styles/main.scss";
import FooterComponent from "@/components/FooterComponent";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

export const metadata = {
  title: "SoftLion",
  description:
    "Embrace the Lion's Share Technological Advancements with SoftLion",
};

export default function RootLayout({
  children,
  session
}: {
  session: Session;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <SessionProvider session={session}>
          <HeaderComponent />
          {children}
          <FooterComponent />
        </SessionProvider>
      </body>
    </html>
  );
}
