interface Props {
    icon: string;
    description: string;
    isActive: boolean;
    deleteButton?: boolean;
}

const SimpleButton: React.FC<Props> = ({
    icon,
    description,
    isActive,
    deleteButton,
}) => {
    return (
        <div className="flex justify-start items-center gap-[11.5px]">
            <img
                className="bg-slate-500 w-[30px] h-[30px] p-[7.5px] rounded-xl "
                src={icon}
                alt=""
            />

            <span className="font-['Helvetica'] text-[#A0AEC0] group-hover:text-white">
                {description}
            </span>
            {deleteButton && (
                <div className="bg-[#7E869E] text-white rounded-[50%] p-[6px]">
                    X
                </div>
            )}
        </div>
    );
};

export default SimpleButton;
