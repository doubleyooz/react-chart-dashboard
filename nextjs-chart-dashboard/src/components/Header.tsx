"use client";
import { BsSearch } from "react-icons/bs";
import { FaBell, FaCog, FaUser } from "react-icons/fa";
import Button from "../common/Button";
import TextField from "../common/TextField";

const Header: React.FC<{}> = () => {
  return (
    <header className="flex w-full gap-1 px-6 py-2 justify-between bg-transparent">
      <div className="flex flex-col w-full justify-start gap-1">
        <span className="text-[10px] xs:text-xs text-white">
          Pages / Profile
        </span>
        <span className="text-xs xs:text-sm text-white font-bold">Profile</span>
      </div>
      <div className="flex justify-between w-full gap-3">
        <div className="flex min-w-[160px] h-12 px-3 rounded-2xl items-center bg-skin-white border">
          <TextField
            name="search"
            placeholder="Type here...."
            noBorder
            noLabel
          />
          <BsSearch />
        </div>

        <div className="flex gap-2">
          <Button
            variant="text"
            text="Rafael"
            prependIcon={<FaUser />}
            rounded
          />
          <Button variant="text" icon={<FaCog />} rounded />
          <Button variant="text" icon={<FaBell />} rounded />
        </div>
      </div>
    </header>
  );
};

export default Header;
