import { ReactComponent as Correct } from '../assets/content/correct.svg';
import { ReactComponent as Warning } from '../assets/content/warning.svg';
import { ReactComponent as NoInfo } from '../assets/content/noinfo.svg';
import serasa from '../assets/content/serasa.png';

interface Props {
    colour: string;
    Icon: React.ReactNode;
    description: string;
}

const Restrition: React.FC<Props> = ({ colour, Icon, description }) => {
    return (
        <div className='flex gap-3'>
            <div className={`${colour} min-w-[100px] w-28 h-14 rounded-lg p-2 mb-3`}>
                <img className="" src={serasa} alt="" />
            </div>
            <div className='flex flex-col'>
                <span className='font-bold text-[10px]'>{description}</span>
                <span className='text-[6px] text-skin-mild'>Verificado às 21:52:12 (GTM-2)</span>
                <div>{Icon}</div>
            </div>
        </div>
    );
};

const Restritions: React.FC<{}> = () => {
    return (
        <div className="bg-skin-white px-3 py-4">
            <Restrition colour="bg-skin-detail_1" Icon={<Correct/>} description={'Sem restritivos'} />
            <Restrition colour="bg-skin-warning" Icon={<Warning/>} description={'Impedimento Encontrado'} />
            <Restrition colour="bg-skin-mildWhite" Icon={<NoInfo/>} description={'Sem informação'} />
        </div>
    );
};

export default Restritions;
