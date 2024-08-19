import { BsSearch } from 'react-icons/bs';
import { FaBell, FaCog, FaUser } from 'react-icons/fa';
import Button from './Button';

const Header: React.FC<{}> = () => {
    return (
        <header className="mt-6 mb-24 md:mb-28 lg:mb-32 gap-1 px-6 flex flex-col xs:flex-row justify-between z-350 bg-transparent">
            <div className="flex flex-col justify-start gap-1 mb-2">
                <span className="text-[10px] xs:text-xs text-white">
                    Pages / Profile
                </span>
                <span className="text-xs xs:text-sm text-white font-bold">
                    Profile
                </span>
            </div>
            <div className="flex flex-col xs:flex-row justify-center items-center gap-3 2xs:gap-6">
                <div className="flex items-center">
                    <div className="flex w-[10vw] min-w-[160px] h-12 px-3 rounded-2xl items-center bg-skin-white border-[0.5px]">
                        <Button variant="text" icon={<BsSearch />} rounded />
                        <input
                            className="bg-transparent w-full outline-none text-sm text-gray-600 placeholder-gray-40"
                            type="text"
                            placeholder="Type here..."
                        />
                    </div>
                </div>
                <div className="flex items-center mr-2 gap-2 -translate-y-24 xs:translate-y-0 0xs:translate-x-12 xxs:translate-x-20 2xxs:translate-x-24 xs:translate-x-0">
                    <div className="flex items-center gap-[5px]">
                        <Button
                            variant="text"
                            text="Rafael"
                            prependIcon={<FaUser />}
                            rounded
                        />
                    </div>
                    <Button variant="text" icon={<FaCog />} rounded />
                    <Button variant="text" icon={<FaBell />} rounded />
                </div>
            </div>
        </header>
    );
};

export default Header;
