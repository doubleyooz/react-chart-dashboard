import background from '../assets/content/background.png';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';

const Dashboard = () => {
    return (
        <div className="flex px-4">
            <SideMenu />
            <div className=" flex-grow">
                <div className="relative w-full h-10 z-[1]">
                    <img
                        className="absolute top-0 right-0"
                        src={background}
                        alt=""
                    />
                </div>
                <Header/>
                Content
            </div>
        </div>
    );
};

export default Dashboard;
