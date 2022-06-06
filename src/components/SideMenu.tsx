import React from 'react';
import { useState } from 'react';

import SimpleButton from './SimpleButton';

import { ReactComponent as Logo } from '../assets/menu/logo.svg';
import { ReactComponent as Home } from '../assets/menu/home.svg';
import { ReactComponent as Status } from '../assets/menu/status.svg';
import { ReactComponent as Card } from '../assets/menu/card.svg';
import { ReactComponent as User } from '../assets/menu/user.svg';
import { ReactComponent as Config } from '../assets/menu/config.svg';


interface DropdownProps {
    setIsSelected: (isSelected: string) => void;
    isSelected: string;
}

const DropdownNav: React.FC<DropdownProps> = ({
    setIsSelected,
    isSelected,
}) => {
    const [selectedItem, setSelectedItem] = useState('');
    const [isDisplayed, setIsDisplayed] = useState(false);

    const data = [
        { description: 'Fazenda Agro Mais' },
        { description: 'Fazenda Agro Top' },
    ];

    return (
        <div
            className={`${
                isDisplayed ? 'h-36' : 'h-12'
            } overflow-hidden transition-all ease-out duration-700`}
        >
            <SimpleButton
                Icon={<Status className="fill-skin-default" />}
                description="Carteira dos clientes"
                isActive={isSelected[0] === 'b'}
                onClick={() => {
                    setIsDisplayed(!isDisplayed);
                    isSelected === 'b'
                        ? setIsSelected(isSelected)
                        : setIsSelected('b');
                }}
            />
            <div className="border-l-2 ml-3 pl-3 overflow-y-scroll scrollbar-hide max-h-[480px]">
                {data.map(({ description }, i) => (
                    <SimpleButton
                        key={description + i}
                        Icon={<Card className="fill-skin-default" />}
                        description={description}
                        isActive={selectedItem === description + i}
                        onClick={() => setSelectedItem(description + i)}
                        deleteButton={true}
                    />
                ))}
            </div>
        </div>
    );
};

const List: React.FC<{}> = () => {
    const [isSelected, setIsSelected] = useState('a');

    return (
        <div className="mb-[60px]">
            <SimpleButton
                Icon={<Home className="fill-skin-default" />}
                description="Visão Geral"
                isActive={isSelected[0] === 'a'}
                onClick={() => setIsSelected('a')}
            />
            <DropdownNav
                isSelected={isSelected}
                setIsSelected={setIsSelected}
            />
        </div>
    );
};

const Personal: React.FC<{}> = () => {
    const [isSelected, setIsSelected] = useState(''); 
    return (
        <div className='mt-4'>
            
            <SimpleButton
                Icon={<User className="fill-skin-default" />}
                description="Conta"
                isActive={isSelected[0] === 'a'}
                onClick={() => setIsSelected('a')}
            />
            <SimpleButton
                Icon={<Config className="fill-skin-default" />}
                description="Configurações"
                isActive={isSelected[0] === 'b'}
                onClick={() => setIsSelected('b')}
            />
        </div>
    )
}

const SideMenu: React.FC<{}> = () => {
    return (
        <div className="px-8 mt-3 hidden sm:block">
            <Logo className="mb-10" />
            <List />
            <span className="text-skin-solid font-bold font-['Helvetica']">CONTA</span>
            <Personal />
        </div>
    );
};

export default SideMenu;
