"use client";
import Text from "@/components/atoms/text/Text";
import Profile from "@/components/domain/info/components/Profile";
import Resume from "@/components/domain/info/components/Resume";
import React from "react";
import { useTranslation } from "react-i18next";

const InfoPage = () => {
  const { t } = useTranslation();

  return (
    <div className="open-window flex flex-col items-center bg-[#191919] p-[100px] slideUp">
      <Text
        className="text-white text-5xl font-bold leading-[150%]"
        value={t("info_title")}
      />
      <Profile />
      <Resume />
    </div>
  );
};

export default InfoPage;
