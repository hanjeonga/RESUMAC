import OpenHeader from "@/components/common/openHeader/OpenHeader";

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
