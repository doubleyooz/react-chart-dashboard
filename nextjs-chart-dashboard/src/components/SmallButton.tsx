interface Props {
    Icon: React.ReactNode;
    description: string;
}

const SmallButton: React.FC<Props> = ({ Icon, description }) => {
    return (
        <div className="flex items-center rounded-lg p-1.5 gap-2 bg-skin-white hover:bg-skin-mildWhite hover:bg-opacity-60">
            <div className="rounded-xl flex">
                {Icon}
            </div>

            <span className="hidden xs:block text-skin-solid text-[10px] font-bold font-['Helvetica']">
                {description}
            </span>
        </div>
    );
};

export default SmallButton;
