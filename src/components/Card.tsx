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
        <div className="relative flex justify-between gap-3 m-6 p-6 rounded-2xl bg-gradient-to-b to-[#ffffffcc] from-[#ffffffd1] backdrop-filter backdrop-blur-lg bg-opacity-80">
            <div className="flex items-center">
                <img className="w-16 h-16 mr-3" src={logo} alt="" />
                <div className="flex flex-col mr-11">
                    <span className="text-skin-solid font-bold">
                        {data.title}
                    </span>
                    <span className="text-skin-medium">{data.email}</span>
                    <span className="text-skin-medium">{data.cpf}</span>
                </div>
                <div className="flex items-center gap-1 bg-skin-white p-2 rounded-xl shadow-md">
                    <div className="bg-skin-darker bg-opacity-25 rounded-md">
                        <Plus className="stroke-black" />
                    </div>

                    <span className="text-[10px] font-bold">
                        Solicitar Crédito
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="rounded-full w-4 h-4 border-2"></div>
                <span className="text-sm bg-skin-solid">
                    Cliente desde
                </span>
                <span className="text-sm bg-skin-solid">
                    {data.date.toLocaleDateString()}
                </span>
            </div>
        </div>
    );
};

export default Card;
