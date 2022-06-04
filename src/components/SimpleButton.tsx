interface Props {
    Icon: React.ReactNode;
    description: string;
    isActive: boolean;
    deleteButton?: boolean;
}

const SimpleButton: React.FC<Props> = ({
    Icon,
    description,
    isActive,
    deleteButton,
}) => {
    return (
        <div className="flex justify-start items-center gap-[11.5px]">
            <div className="bg-skin-detail_1 p-2">{Icon}</div>

            <span
                className={`${
                    isActive ? 'text-skin-solid' : 'text-skin-mild'
                } font-bold font-['Helvetica']  group-hover:text-white`}
            >
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
