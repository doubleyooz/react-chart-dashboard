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
        <div className="flex px-4">
            <SideMenu />
            <div className=" flex-grow">
                <div className="relative w-full z-[1]">
                    <img
                        className="absolute top-0 right-0 min-h-[250px] rounded-3xl"
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
