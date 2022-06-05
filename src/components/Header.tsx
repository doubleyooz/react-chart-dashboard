import { ReactComponent as Search } from '../assets/header/search.svg';

const Header: React.FC<{}> = () => {
    return (
        <header className="mb-10 flex justify-between z-350 bg-transparent">
            <div className="flex flex-col justify-start">
                <span>Pages / Profile</span>
                <span>Profile</span>
            </div>
            <div className="flex items-center">
                <div className="flex items-center ">
                    <div className="flex rounded-2xl justify-start items-center bg-skin-white border-[0.5px] p-2">
                        <Search className="hidden sm:inline-flex text-white rounded-full cursor-pointer md:mx-2" />
                        <input
                            className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeolder-gray-40"
                            type="text"
                            placeholder="Type here..."
                        />
                    </div>
                </div>
                <div>Rafael</div>
            </div>
        </header>
    );
};

export default Header;
