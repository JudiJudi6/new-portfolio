import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Loader from "./components/Loader";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Łukasz Michnik | Portfolio Page",
  description: "Kiedys cos tu napisze",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/icon.svg" />
      </Head>
      <html lang="en" className="text-base xl:text-lg 2xl:text-xl">
        <body className={almarai.className}>
          <div
            id="app"
            className="bg-white relative flex flex-col items-center justify-center w-full h-screen overflow-x-hidden"
          >
            {children}
          </div>
        </body>
      </html>
    </>
  );
}
