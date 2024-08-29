"use client";
import type React from "react";
import { ClipLoader } from "react-spinners";

type StyleVariant = "text" | "primary";
type StyleSize = "x-small" | "small" | "medium" | "large";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick?: () => any;
  type?: "button" | "submit" | "reset" | undefined;
  text?: string;
  size?: StyleSize;
  variant?: StyleVariant;
  outlined?: boolean;
  loading?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  shadow?: boolean;
  appendIcon?: React.ReactNode;
  prependIcon?: React.ReactNode;
  icon?: React.ReactNode;
}
const generateClassname = (
  variant: StyleVariant,
  size: StyleSize,
  outlined: boolean = false,
  rounded: boolean = false,
  icon: boolean = false
) => {
  const base = "border-b ";
  const mainColor =
    variant === "primary"
      ? "bg-slate-700 text-white border-slate-700"
      : "text-gray-800 hover:bg-gray-100";
  const border = outlined ? "" : " border-0";
  const roundedClass = icon ? " p-2 rounded-full" : " w-full rounded-lg";
  const roundedStyle = rounded
    ? roundedClass.replace("rounded-lg", "rounded-3xl")
    : roundedClass;
  const padding = rounded ? "py-2 px-4" : "px-4";
  const sizeMap = {
    "x-small": {
      height: "h-6 text-xs",
      width: "min-w-6 max-w-6",
    },
    small: {
      height: "h-7 text-xs",
      width: "min-w-7 max-w-7",
    },
    medium: {
      height: "h-9 text-sm",
      width: "min-w-9 max-w-9",
    },
    large: {
      height: "h-10 text-base",
      width: "min-w-10 max-w-10",
    },
  };
  const { height, width } = sizeMap[size] ?? sizeMap["medium"];

  return `${base}${mainColor}${border}${roundedStyle} ${
    icon ? `${height} ${width} ` : `${height} ${padding}`
  }`;
};

const Button: React.FC<ButtonProps> = ({
  handleClick = () => {},
  text,
  type = "button",
  size = "medium",
  variant = "text",
  disabled,
  loading,
  outlined,
  shadow,
  rounded,
  appendIcon,
  prependIcon,
  icon,
}) => {
  const btnClasses = generateClassname(
    variant,
    size,
    outlined,
    rounded,
    !!icon
  );

  return (
    <button
      disabled={disabled}
      onClick={() => handleClick()}
      className={`w- text-base font-bold transition duration-300 ease-in-out  ${
        shadow && "shadow-2xl shadow-black"
      } ${disabled && "opacity-50 text-gray-300 "} ${btnClasses}`}
      aria-label={text}
      type={type}
    >
      {loading ? (
        <ClipLoader
          color={outlined ? "#2563eb" : "#fffff"}
          loading={loading}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="flex justify-center items-center gap-2">
          {prependIcon} {icon ? icon : text} {appendIcon}
        </div>
      )}
    </button>
  );
};

export default Button;
