"use client";
import IframeContent from "@/components/common/iframeContent/IframeContent";
import { contentsData } from "../../utils/contentsData";
import Text from "@/components/atoms/text/Text";
import { useTranslation } from "react-i18next";

const ContentWithLink = ({ url, title }: { url: string; title: string }) => {
  const { t } = useTranslation();
  const data = contentsData[title] || null;

  const contentsWrapperStyle = "flex flex-col";

  const subTitleStyle = {
    color: "text-[#4B4B4B]",
    fontSize: "text-[16px]",
    fontWeight: "font-bold",
  };

  return (
    <section className="w-full min-h-screen flex flex-col p-[30px] gap-y-[15px] scroll-display-none">
      <Text
        customStyles={{ fontSize: "text-[22px]", fontWeight: "font-bold" }}
        value={t(`portfolio_${title}_title`)}
      />
      <div className={contentsWrapperStyle}>
        <Text customStyles={subTitleStyle} value={t("portfolio_info")} />
        <Text value={t(`portfolio_${title}_info`)} />
      </div>
      <div className={contentsWrapperStyle}>
        <Text customStyles={subTitleStyle} value={t("portfolio_process")} />
        <Text value={t(`portfolio_${title}_process`)} />
      </div>
      <div className={contentsWrapperStyle}>
        <Text customStyles={subTitleStyle} value={t("portfolio_skills")} />
        <Text value={t(`portfolio_${title}_skills`)} />
      </div>
      <div className={contentsWrapperStyle}>
        <Text customStyles={subTitleStyle} value={t("portfolio_task")} />
        <Text value={t(`portfolio_${title}_task`)} />
      </div>
      <div className={contentsWrapperStyle}>
        <Text
          customStyles={subTitleStyle}
          value={t("portfolio_troubleshooting")}
        />
        {Array.from({ length: data.troubleshooting }).map((_, idx) => (
          <div key={`${title}_troubleshooting_${idx}`}>
            <Text value={t(`portfolio_${title}_troubleshooting_trouble`)} />
            <Text value={t(`portfolio_${title}_troubleshooting_solve`)} />
          </div>
        ))}
      </div>
      <div className="w-[80%] h-[600px] self-center">
        <IframeContent url={url} title={title} />
      </div>
    </section>
  );
};

export default ContentWithLink;
