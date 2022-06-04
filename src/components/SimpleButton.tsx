import { ReactComponent as Close } from '../assets/menu/close.svg';

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
        <div className="flex justify-start items-center gap-[11.5px] rounded-2xl h-12">
            <div className="bg-skin-detail_1 w-8 h-8 rounded-xl flex justify-center items-center p-2">{Icon}</div>

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
