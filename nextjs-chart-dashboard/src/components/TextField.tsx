import type React from 'react';
import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { BsEye, BsEyeFill, BsEyeSlash, BsEyeSlashFill } from 'react-icons/bs';
import { GoEye, GoEyeClosed } from 'react-icons/go';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    error?: string;
    register?: UseFormRegister<any>;
    disabled?: boolean;
    placeholder?: string;
}

const TextField: React.FC<TextFieldProps> = ({
    name,
    type,
    error,
    disabled = false,
    placeholder,
    register,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    return (
        <div>
            <span className="text-xs">{name.toUpperCase()}</span>
            <div
                className={`relative flex items-center border-b-2 ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
            >
                <input
                    id="`input-${placeholder}`"
                    placeholder={placeholder}
                    className={`border-b bg-transparent text-lg ${
                        isPassword ? 'pl-3 pr-7' : 'px-3'
                    } 
          }`}
                    type={showPassword ? 'text' : type}
                    disabled={disabled}
                    autoComplete="off"
                    {...(register && register(name))}
                />
                {isPassword && (
                    <div
                        className="absolute right-0 pr-1 cursor-pointer"
                        onClick={(prev) => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                    </div>
                )}
            </div>
            {error && (
                <span className="text-red-500 text-[10px] font-semibold">
                    {error}
                </span>
            )}
        </div>
    );
};

export default TextField;
