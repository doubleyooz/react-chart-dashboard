import logo from '../assets/menu/logo.svg';
import home from '../assets/menu/home.svg';
import SimpleButton from './SimpleButton';

const SideMenu = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <SimpleButton icon={home} description='button'/>
        </div>
    );
};

export default SideMenu;
