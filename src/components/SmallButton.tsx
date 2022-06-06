interface Props {
    Icon: React.ReactNode;
    description: string;
}

const SmallButton: React.FC<Props> = ({ Icon, description }) => {
    return (
        <div className="flex items-center gap-1">
            <div className="rounded-xl flex justify-center items-center p-2">
                {Icon}
            </div>

            <span className="text-skin-solid text-icon font-bold font-['Helvetica']">
                {description}
            </span>
        </div>
    );
};

export default SmallButton;
