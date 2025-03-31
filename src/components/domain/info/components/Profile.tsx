import LabelText from "@/components/common/labelText/LabelText";

const Profile = () => {
  const infoList = [
    { label: "이름", value: "한정아 (Jennifer Han)" },
    { label: "EMAIL", value: "mongndam@naver.com" },
    { label: "GMAIL", value: "jeongahan1225@gmail.com" },
    { label: "이름", value: "한정아" },
  ];

  return (
    <div className="w-full flex justify-center gap-x-[80px] mt-[20px]">
      <div className="profile-img" />
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
