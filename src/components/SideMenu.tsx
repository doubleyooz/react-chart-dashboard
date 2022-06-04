import { useState } from 'react';

import SimpleButton from './SimpleButton';

import { ReactComponent as Logo } from '../assets/menu/logo.svg';
import { ReactComponent as Home } from '../assets/menu/home.svg';
import { ReactComponent as Status } from '../assets/menu/status.svg';
import { ReactComponent as Card } from '../assets/menu/card.svg';

interface Props {}

const SideMenu: React.FC<Props> = () => {
    const [isSelected, setIsSelected] = useState<string[]>([]);
    const [isExpanded, setIsExpanded] = useState<string[]>([]);

    return (
        <div>
            <Logo />
            <SimpleButton
                Icon={<Home className="fill-skin-default" />}
                description="Visão Geral"
                isActive={isSelected.includes('b')}
            />
            <SimpleButton
                Icon={<Status className="fill-skin-default" />}
                description="Carteira dos clientes"
                isActive={isExpanded.includes('s')}
            />
            <SimpleButton
                Icon={<Card className="fill-skin-default" />}
                description="Fazenda Agro Mais"
                isActive={isSelected.includes('b')}
                deleteButton={true}
            />
            <SimpleButton
                Icon={<Card className="fill-skin-default" />}
                description="Fazenda Agro Top"
                isActive={isSelected.includes('b')}
                deleteButton={true}
            />
        </div>
    );
};

export default SideMenu;
