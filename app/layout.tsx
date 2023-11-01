"use client";
import HeaderComponent from "../components/HeaderComponent";
import "./../styles/main.scss";
import FooterComponent from "@/components/FooterComponent";
import s from "./layout.module.scss";
import { QueryClient, QueryClientProvider } from "react-query";

export const metadata = {
  title: "SoftLion",
  description:
    "Embrace the Lion's Share Technological Advancements with SoftLion",
};
const queryClient = new QueryClient();
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
        <div className={s.main}>
          <HeaderComponent />
          <QueryClientProvider client={queryClient}>
            <div className={s.page} id="layout">
              {children}
            </div>
          </QueryClientProvider>
          <FooterComponent />
        </div>
        <div id="modalRoot"></div>
      </body>
    </html>
  );
}
