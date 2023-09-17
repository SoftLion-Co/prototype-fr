import { useLocalStorage } from '@mantine/hooks';
import { redirect } from 'next/navigation';

export const metadata = {
  title: "SoftLion Admin",
  description:
    "Embrace the Lion's Share Technological Advancements with SoftLion",
};

export default function RootLayout({
  children,
  // session
}: {
  // session: Session;
  children: React.ReactNode;
}) {

    

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
