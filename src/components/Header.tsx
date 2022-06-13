import { ReactComponent as Search } from '../assets/header/search.svg';
import { ReactComponent as User } from '../assets/menu/user.svg';
import { ReactComponent as Config } from '../assets/header/config.svg';
import { ReactComponent as Bell } from '../assets/header/bell.svg';

const Header: React.FC<{}> = () => {
    return (
        <header className="mt-6 mb-24 md:mb-28 lg:mb-32 gap-1 px-6 flex flex-col xs:flex-row justify-between z-350 bg-transparent">
            <div className="flex flex-col justify-start gap-1 mb-2">
                <span className="text-xs text-white">Pages / Profile</span>
                <span className="text-sm text-white font-bold">Profile</span>
            </div>
            <div className="flex flex-col xs:flex-row justify-center items-center gap-3 2xs:gap-6">
                <div className="flex items-center">
                    <div className="flex w-[10vw] min-w-[160px] h-12 px-3 rounded-2xl items-center bg-skin-white border-[0.5px]">
                        <Search className="w-5 mr-3 text-white rounded-full cursor-pointer" />
                        <input
                            className="bg-transparent w-full outline-none text-sm text-gray-600 placeholder-gray-40"
                            type="text"
                            placeholder="Type here..."
                        />
                    </div>
                </div>
                <div className='flex items-center mr-2 gap-3 -translate-y-24 xs:translate-y-0 0xs:translate-x-12 xxs:translate-x-20 2xxs:translate-x-24 xs:translate-x-0'>
                    <div className="flex items-center gap-[5px]">
                        <User className="fill-skin-default" />
                        <span className="text-xs text-white">Rafael</span>
                    </div>
                    <Config className="fill-skin-default min-w-[15px] 2xs:min-w-[20px]" />
                    <Bell className="fill-skin-default min-w-[15px] 2xs:min-w-[20px]" />
                </div>
            </div>
        </header>
    );
};

export default Header;
