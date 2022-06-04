interface Props {
    icon: string;
    description: string;
}

const SimpleButton: React.FC<Props> = ({ icon, description }) => {
    return (
        <div className="bg-slate-500">
            <img src={icon} alt="" />
            <span>{description}</span>
        </div>
    );
};

export default SimpleButton;
