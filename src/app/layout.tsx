"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header/Header";
import { IoLogoApple } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import "../../i18n";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen">
          <div className="w-full h-[90%] bg-[#ecedef] flex flex-col items-center">
            <div className="w-full h-[20px] flex justify-center items-center">
              <div className="w-[8px] h-[8px] bg-black rounded-full"></div>
            </div>
            <div className="w-[98%] h-[94%] border border-solid border-[#4F4F57]">
              <Header />
              <AnimatePresence mode="wait">
                <motion.div
                  key={pathname}
                  initial={
                    isHome ? { opacity: 0, y: -10 } : { opacity: 0, y: 10 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full height-contents"
                >
                  {children}
                </motion.div>
              </AnimatePresence>
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
