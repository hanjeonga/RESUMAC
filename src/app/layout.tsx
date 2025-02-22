import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header/Header";
import { IoLogoApple } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RESUMAC",
  description: "JA's Portfolio, Mac-inspired ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen">
          <div className="w-full h-[90%] bg-[#ecedef] flex flex-col items-center">
            <div className="w-full h-[20px] m-[0 auto] flex justify-center items-center">
              <div className="w-[8px] h-[8px] bg-black rounded-[50%]"></div>
            </div>
            <div className="w-[98%] h-[94%] border border-solid border-[#4F4F57]">
              <Header />
              <div className="w-full height-contents">{children}</div>
            </div>
          </div>
          <div className="w-full h-[10%] bg-[#C0C3E6] flex justify-center items-center">
            <IoLogoApple className="w-[50px] h-[50px] text-white" />
          </div>
        </div>
      </body>
    </html>
  );
}
