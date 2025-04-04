"use client";
import LabelText from "@/components/common/labelText/LabelText";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();

  const infoList = [
    { label: t("info_name"), value: t("info_name_value") },
    { label: "EMAIL", value: "mongndam@naver.com" },
    { label: "GMAIL", value: "jeongahan1225@gmail.com" },
    { label: "Birth", value: "1995.10.16" },
  ];

  return (
    <div className="w-full flex justify-center gap-x-[80px] mt-[30px]">
      <div className="profile-wrapper">
        <div className="profile-img" />
      </div>
      <div className="flex flex-col gap-y-[10px] mt-[10px]">
        {infoList.map((info, idx) => (
          <LabelText
            key={`${info.label}_${idx}`}
            label={info.label}
            value={info.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
