import type { Metadata } from "next";
import Nav from "@/components/common/nav/Nav";

export const metadata: Metadata = {
  title: "RESUMAC",
  description: "JA's Portfolio, Mac-inspired",
};

export default function Home() {
  return (
    <div className="w-full h-full bg-custom flex justify-center items-end">
      <Nav />
    </div>
  );
}
