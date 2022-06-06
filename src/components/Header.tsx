import { ReactComponent as Search } from '../assets/header/search.svg';
import { ReactComponent as User } from '../assets/menu/user.svg';
import { ReactComponent as Config } from '../assets/header/config.svg';
import { ReactComponent as Bell } from '../assets/header/bell.svg';

const Header: React.FC<{}> = () => {
    return (
        <header className="mt-6 mb-28 px-6 flex justify-between z-350 bg-transparent">
            <div className="flex flex-col justify-start gap-1">
                <span className="text-xs text-white">Pages / Profile</span>
                <span className="text-sm text-white font-bold">Profile</span>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex items-center">
                    <div className="flex w-[10vw] min-w-[160px] h-12 px-3 rounded-2xl items-center bg-skin-white border-[0.5px]">
                        <Search className="hidden sm:inline-flex w-5 mr-3 text-white rounded-full cursor-pointer" />
                        <input
                            className="bg-transparent  w-full outline-none text-sm text-gray-600 placeholder-gray-40"
                            type="text"
                            placeholder="Type here..."
                        />
                    </div>
                </div>
                <div className="flex items-center gap-[5px]">
                    <User className="fill-skin-default" />
                    <span className="text-xs text-white">Rafael</span>
                </div>
                <Config className="fill-skin-default" />
                <Bell className="fill-skin-default" />
            </div>
        </header>
    );
};

export default Header;
