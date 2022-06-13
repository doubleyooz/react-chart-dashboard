import background from '../assets/content/background.png';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import Card from '../components/Card';
import FirstSection from '../components/FirstSection';

const Dashboard = () => {
    const data = {
        email: 'gabriel@agromais.com',
        cpf: '123.456.789-50',
        title: 'PRODUTO RURAL',
        date: new Date()
    }
    return (
        <div className="grid grid-cols-5">
            <SideMenu />
            <div className="col-span-4 flex flex-col">
                <div className="relative z-[1]">
                    <img
                        className="absolute top-0 right-0 min-h-[250px] max-h-80 w-full rounded-3xl"
                        src={background}
                        alt=""
                    />
                </div>
                <Header/>
                <Card data={data} />
                <FirstSection/>
                Graphs
            </div>
        </div>
    );
};

export default Dashboard;
