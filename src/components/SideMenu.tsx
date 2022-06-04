import { useState } from 'react';

import SimpleButton from './SimpleButton';

import { ReactComponent as Logo } from '../assets/menu/logo.svg';
import { ReactComponent as Home } from '../assets/menu/home.svg';
import { ReactComponent as Status } from '../assets/menu/status.svg';
import { ReactComponent as Card } from '../assets/menu/card.svg';

interface Props {}

const SideMenu: React.FC<Props> = () => {
    const [isSelected, setIsSelected] = useState('');
    const [selectedItem, setSelectedItem] = useState('');
    const [isDisplayed, setIsDisplayed] = useState(false);

    const data = [
        { description: 'Fazenda Agro Mais' },
        { description: 'Fazenda Agro Top' },
    ];

    return (
        <div className="px-8">
            <Logo className="mb-10" />
            <div>
                <SimpleButton
                    Icon={<Home className="fill-skin-default" />}
                    description="Visão Geral"
                    isActive={isSelected === 'a'}
                    onClick={() => setIsSelected('a')}
                />

                <div
                    className={`${
                        isDisplayed ? 'h-36' : 'h-12'
                    } overflow-hidden transition-all ease duration-700`}
                >
                    <SimpleButton
                        Icon={<Status className="fill-skin-default" />}
                        description="Carteira dos clientes"
                        isActive={isSelected === 'b'}
                        onClick={() => {
                            setIsDisplayed(!isDisplayed);
                            setIsSelected('b');
                        }}
                    />
                    <div className='border-l-2 pl-4'>
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
            </div>
        </div>
    );
};

export default SideMenu;
