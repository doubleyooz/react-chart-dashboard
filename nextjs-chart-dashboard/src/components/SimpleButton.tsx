import React from "react";
import { CgClose } from "react-icons/cg";

interface Props {
  Icon: React.ReactNode;
  description: string;
  isActive: boolean;
  deleteButton?: boolean;
  onClick: () => void;
}

const SimpleButton: React.FC<Props> = ({
  Icon,
  description,
  isActive,
  deleteButton,
  onClick,
}) => {
  return (
    <div
      className={`${
        deleteButton ? "justify-between" : ""
      } flex items-center rounded-2xl gap-3 h-12 min-w-[130px]`}
      onClick={onClick}
    >
      <div className="bg-skin-detail_1 w-8 h-8 rounded-xl flex justify-center items-center p-2">
        {Icon}
      </div>

      <span
        className={`${
          isActive ? "text-skin-solid" : "text-skin-mild"
        } text-xs font-bold font-['Helvetica']`}
      >
        {description}
      </span>
      {deleteButton && <CgClose className="min-w-[16px] min-h-[16px]" />}
    </div>
  );
};

export default SimpleButton;
