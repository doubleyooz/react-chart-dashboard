import SmallButton from "./SmallButton";

import { BiBox, BiChart, BiPlus } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import Image from "next/image";

export interface CardProps {
  email: string;
  cpf: string;
  title: string;
  date: Date;
}

const Card: React.FC<CardProps> = ({ cpf, date, email, title }) => {
  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-between sm:h-36 gap-5 sm:gap-3 m-6 py-8 px-6 rounded-2xl bg-gradient-to-b to-[#ffffffcc] from-[#ffffffd1] backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-[0_3px_5px_0px_rgba(0,0,0,0.2)]">
      <div className="flex flex-col 2xxs:flex-row items-center">
        <Image
          className="mr-3 mb-2 2xxs:mb-0 rounded-lg drop-shadow-md"
          src={"/logo.jpg"}
          width={64}
          height={64}
          alt=""
        />
        <div className="flex flex-col">
          <span className="text-skin-solid font-bold text-sm md:text-base 2md:text-lg text-center">
            {title}
          </span>
          <span className="text-skin-medium text-xs md:text-sm">{email}</span>
          <span className="text-skin-medium text-xs md:text-sm">
            CPF: {cpf}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1 bg-skin-white px-2 sm:px-4 md:px-2 lg:px-5 py-2 rounded-xl shadow-md">
        <div className="hidden sm:block bg-skin-darker bg-opacity-25 rounded-md">
          <BiPlus />
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
            {date.toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className="sm:absolute bottom-0 right-0 flex gap-3 2md:gap-8 lg:gap-12 sm:mr-8 lg:mr-12 mb-2">
        <SmallButton Icon={<BiBox />} description="Análise" />
        <SmallButton Icon={<BiChart />} description="Balanço" />
        <SmallButton Icon={<CiSettings />} description="Configurações" />
      </div>
    </div>
  );
};

export default Card;
