import Text from "@/components/atoms/text/Text";
import InfoContents from "@/components/domain/info/components/InfoContents";
import Profile from "@/components/domain/info/components/Profile";
import React from "react";

const InfoPage = () => {
  return (
    <div className="open-window flex flex-col items-center bg-[#191919] p-[100px] slideUp">
      <Text
        className="text-white text-5xl font-bold leading-[150%]"
        value={"Resume"}
      />
      <Profile />
      <InfoContents />
    </div>
  );
};

export default InfoPage;
