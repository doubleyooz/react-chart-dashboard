import { ReactComponent as Close } from '../assets/menu/close.svg';

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
            className={`${deleteButton ? 'justify-between' : ''} flex  items-center rounded-2xl gap-3 h-12`}
            onClick={onClick}
        >
            <div className="bg-skin-detail_1 w-8 h-8 rounded-xl flex justify-center items-center p-2">
                {Icon}
            </div>

            <span
                className={`${
                    isActive ? 'text-skin-solid' : 'text-skin-mild'
                } font-bold font-['Helvetica']  group-hover:text-white`}
            >
                {description}
            </span>
            {deleteButton && <Close />}
        </div>
    );
};

export default SimpleButton;
