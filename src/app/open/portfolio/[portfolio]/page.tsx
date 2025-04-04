"use client";
import ContentsWithSample from "@/components/domain/portfolio/components/contents/ContentsWithSample";
import ContentWithLink from "@/components/domain/portfolio/components/contents/ContentWithLink";
import RightSection from "@/components/domain/portfolio/components/RightSection";
import { useParams } from "next/navigation";

const PortfolioModal = () => {
  const params = useParams();
  const portfolio = params.portfolio as string;

  const renderComponent = () => {
    switch (portfolio) {
      case "careup":
        return (
          <ContentWithLink url="https://careup.deep-medi.com/" title="careup" />
        );
      case "medikids":
        return (
          <ContentWithLink
            url="https://kidscare.deep-medi.com/"
            title="medikids"
          />
        );
      case "taebaeck":
        return <ContentsWithSample title="taebaeck" />;
      case "deepmedi":
        return (
          <ContentWithLink url="https://deep-medi.com/" title="deepmedi" />
        );
      case "stressmonitor":
        return <ContentsWithSample title="stressmonitor" />;
      case "video":
        return <ContentsWithSample title="video" />;
      case "facehealthmonitor":
        return (
          <ContentWithLink
            url="https://rppg.deep-medi.com/"
            title="facehealthmonitor"
          />
        );
      case "ddc":
        return <ContentWithLink url="https://ddc.deep-medi.com/" title="ddc" />;
      case "webview":
        return (
          <ContentWithLink
            url="https://result.deep-medi.com/ko/doyeon/q?hr=56&hr_status=HEALTHY_NONE&resp=4&resp_status=DANGER_HIGH&fatigue=24&fatigue_status=WARNING&stress=63&stress_status=NORMAL&bp_sys=32&bp_dia=64&bp_status=DANGER&score=73&alcohol=null&temp=36&temp_status=HEALTHY&score=90"
            title="webview"
          />
        );
      case "sosomap":
        return <ContentsWithSample title="sosomap" />;
      case "mindwalk":
        return <ContentsWithSample title="mindwalk" />;
      case "zetaplan":
        return <ContentsWithSample title="zetaplan" />;
      case "zelkovatree":
        return <ContentsWithSample title="zelkovatree" />;
      case "kurly":
        return <ContentsWithSample title="kurly" />;
      case "baemin":
        return <ContentsWithSample title="baemin" />;
      default:
        return <RightSection />;
    }
  };

  return (
    <div className="w-full h-full bg-white overflow-y-auto">
      {renderComponent()}
    </div>
  );
};

export default PortfolioModal;
