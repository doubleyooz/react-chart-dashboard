interface Props {
    Icon: React.ReactNode;
    description: string;
}

const SmallButton: React.FC<Props> = ({ Icon, description }) => {
    return (
        <div className="flex items-center gap-1 bg-skin-white">
            <div className="rounded-xl flex justify-center items-center p-2">
                {Icon}
            </div>

            <span className="hidden 2md:block text-skin-solid text-[10px] font-bold font-['Helvetica']">
                {description}
            </span>
        </div>
    );
};

export default SmallButton;
