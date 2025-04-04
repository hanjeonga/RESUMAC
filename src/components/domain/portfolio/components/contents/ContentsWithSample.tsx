"use client";
import Text from "@/components/atoms/text/Text";
import { contentsData } from "../../utils/contentsData";
import { useTranslation } from "react-i18next";

const ContentsWithSample = ({ title }: { title: string }) => {
  const { t } = useTranslation();
  const data = contentsData[title] || null;

  const contentsWrapperStyle = "flex flex-col";

  const subTitleStyle = {
    color: "text-[#4B4B4B]",
    fontSize: "text-[16px]",
    fontWeight: "font-bold",
  };

  return (
    <section className="w-full h-full flex flex-col p-[30px] scroll-display-none gap-y-[15px]">
      <Text
        customStyles={{ fontSize: "text-[20px]", fontWeight: "font-bold" }}
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
      <div className="w-[80%] h-[600px] border border-[#8E8E8E] rounded-2xl shadow-lg scroll-display-none self-center"></div>
    </section>
  );
};

export default ContentsWithSample;
