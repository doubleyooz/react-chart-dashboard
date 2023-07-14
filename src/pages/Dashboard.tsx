import { FC, useEffect } from 'react';
import background from '../assets/content/background.png';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import Card from '../components/Card';
import FirstSection from '../components/FirstSection';
import Charts from '../components/Charts';
import { useCheckAuth } from '../shared/hooks/UseCheckAuth';
import { useNavigate } from 'react-router-dom';

const Dashboard: FC = () => {
    const token = useCheckAuth();
   
    const data = {
        email: 'gabriel@agromais.com',
        cpf: '123.456.789-50',
        title: 'PRODUTO RURAL',
        date: new Date(),
    };
    return (
        <div className="grid grid-cols-4 lg:grid-cols-5">
            <SideMenu />
            <div className="col-span-4 md:col-span-3 lg:col-span-4 flex flex-col gap-1">
                <div className="relative z-[1]">
                    <img
                        className="absolute top-0 right-0 min-h-[250px] max-h-80 w-full rounded-3xl"
                        src={background}
                        alt=""
                    />
                </div>
                <Header />
                <Card data={data} />
                <FirstSection />
                <Charts />
            </div>
        </div>
    );
};

export default Dashboard;
