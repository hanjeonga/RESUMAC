import OpenHeader from "@/components/common/openHeader/OpenHeader";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "RESUMAC",
  description: "JA's Portfolio, Mac-inspired",
};
export default function OpenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="size-full">
      <OpenHeader />
      {children}
    </div>
  );
}
