import SmallButton from './SmallButton';

import { ReactComponent as Plus } from '../assets/content/plus.svg';
import { ReactComponent as Box } from '../assets/content/box.svg';
import { ReactComponent as Chart } from '../assets/content/chart.svg';
import { ReactComponent as Config } from '../assets/menu/config.svg';

import logo from '../assets/content/logo.jpg';

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
        <div className="relative flex flex-col sm:flex-row items-center justify-between sm:h-36 gap-5 sm:gap-3 m-6 py-8 px-6 rounded-2xl bg-gradient-to-b to-[#ffffffcc] from-[#ffffffd1] backdrop-filter backdrop-blur-lg bg-opacity-80">
            <div className="flex items-center">
                <img
                    className="w-16 h-16 mr-3 rounded-lg drop-shadow-md"
                    src={logo}
                    alt=""
                />
                <div className="flex flex-col">
                    <span className="text-skin-solid font-bold text-sm md:text-base 2md:text-lg text-center">
                        {data.title}
                    </span>
                    <span className="text-skin-medium text-xs md:text-sm">
                        {data.email}
                    </span>
                    <span className="text-skin-medium text-xs md:text-sm">
                        CPF: {data.cpf}
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-1 bg-skin-white px-2 sm:px-4 md:px-2 lg:px-5 py-2 rounded-xl shadow-md">
                <div className="hidden sm:block bg-skin-darker bg-opacity-25 rounded-md">
                    <Plus className="stroke-black" />
                </div>

                <span className="text-[10px] font-bold text-center">
                    Solicitar Crédito
                </span>
            </div>
            <div className="flex items-center gap-3">
                <div className="hidden lg:block rounded-full w-4 h-4 border-2"></div>
                <div className="flex flex-col lg:flex-row gap-3">
                    <span className="text-xs 2md:text-sm font-bold text-skin-solid text-center">
                        Cliente desde
                    </span>
                    <span className="text-xs 2md:text-sm  font-bold text-skin-detail text-center">
                        {data.date.toLocaleDateString()}
                    </span>
                </div>
            </div>
            <div className="sm:absolute bottom-0 right-0 flex gap-3 2md:gap-8 lg:gap-12 sm:mr-8 lg:mr-12 mb-2">
                <SmallButton
                    Icon={<Box className="fill-skin-darker" />}
                    description="Análise"
                />
                <SmallButton
                    Icon={<Chart className="fill-skin-darker" />}
                    description="Balanço"
                />
                <SmallButton
                    Icon={<Config className="fill-skin-darker" />}
                    description="Configurações"
                />
            </div>
        </div>
    );
};

export default Card;
