import logo from '../assets/content/logo.jpg';
import { ReactComponent as Plus } from '../assets/content/plus.svg';

interface Props {
    data: {
        email: string;
        cpf: string;
        title: string;
        date: Date;
    };
}

const Card: React.FC<Props> = ({ data }) => {
    return (
        <div className="px-6 bg-skin-white bg-opacity-75 gap-3">
            <div className='flex'>
                <img className="w-16 h-16 mr-3" src={logo} alt="" />
                <div className='flex flex-col mr-11'>
                    <span className='text-skin-solid font-bold'>{data.title}</span>
                    <span className='text-skin-medium'>{data.email}</span>
                    <span className='text-skin-medium'>{data.cpf}</span>
                </div>
                <div className='flex items-center'>
                    <Plus className="bg-skin-default" />
                    <span className='text-[10px] font-bold'>Solicitar Crédito</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
