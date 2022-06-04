import { useState } from 'react';

import SimpleButton from './SimpleButton';

import logo from '../assets/menu/logo.svg';
import home from '../assets/menu/home.svg';
import status from '../assets/menu/status.svg';
import card from '../assets/menu/card.svg';


interface Props {}

const SideMenu: React.FC<Props> = () => {
    const [isSelected, setIsSelected] = useState<string[]>([]);
    const [isExpanded, setIsExpanded] = useState<string[]>([])
    
    return (
        <div>
            <img src={logo} alt="" />
            <SimpleButton icon={home} description="Visão Geral" isActive={isSelected.includes('b')}/>
            <SimpleButton icon={status} description="Carteira dos clientes" isActive={isExpanded.includes('s')}/>
            <SimpleButton icon={card} description="Fazenda Agro Mais" isActive={isSelected.includes('b')} deleteButton={true}/>
            <SimpleButton icon={card} description="Fazenda Agro Top" isActive={isSelected.includes('b')} deleteButton={true}/>
        </div>
    );
};

export default SideMenu;
