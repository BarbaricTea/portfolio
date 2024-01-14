import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sofia | Developer",
  description:
    "Sofia is a frontend-developer with 3 years of experience in the field",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`§{inter.className} bg-stone-200 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}
      >
        <div className="bg-stone-400 absolute top-[-6rem] right-[0rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[12rem] z-10"></div>
        <div className="bg-stone-500 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[15rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
