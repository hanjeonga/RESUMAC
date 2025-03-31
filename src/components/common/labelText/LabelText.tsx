import Text from "@/components/atoms/text/Text";
import { LabelTextProps } from "./LabelText.type";

const LabelText = ({ label, value }: LabelTextProps) => {
  return (
    <div className="flex items-center">
      <Text className="w-[80px] text-[#9b9b9b] leading-[150%]" value={label} />
      <div className="label-line leading-[150%]" />
      <Text className="text-white leading-[150%]" value={value} />
    </div>
  );
};

export default LabelText;
