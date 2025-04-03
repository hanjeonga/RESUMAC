import LeftSection from "@/components/domain/portfolio/components/LeftSection";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full open-height flex">
      <LeftSection />
      {children}
    </div>
  );
}
