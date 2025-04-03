"use client";
import { useParams } from "next/navigation";

const PortfolioModal = () => {
  const params = useParams();
  const portfolio = params.portfolio as string;

  // id 값에 따라 다른 컴포넌트 렌더링
  const renderComponent = () => {
    switch (portfolio) {
      case "a":
        return <div />;
      case "b":
        return <div />;
      default:
        return <div />;
    }
  };

  return <div className="w-full h-full bg-white">{renderComponent()}</div>;
};

export default PortfolioModal;
