import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@arco-design/web-react/dist/css/arco.css";
import "../globals.css";
import { NextIntlClientProvider, useMessages } from 'next-intl';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={`${inter.className} app-page min-h-screen`} >
        <NextIntlClientProvider locale={locale} messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
