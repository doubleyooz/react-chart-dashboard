interface Props {
    title: string;
    values: string[];
    isLabel?: boolean;
    isTail?: boolean;
}

const formatString = (str: string, index: number): string => {
    let integers = str.slice(0, index);
    let decimals = str.slice(index);

    return integers.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ',' + decimals;
};

const Column: React.FC<Props> = ({ title, values, isLabel, isTail }) => {
    return (
        <div className={`${isLabel ? 'w-36': 'w-24'} flex flex-col text-skin-solid gap-3 items-center`}>
            <span
                className={`${
                    title === '' ? 'h-5' : ''
                } w-24 text-xs xl:text-sm 2xl:text-base font-bold text-right`}
            >
                {title}
            </span>
            {values.map((value, i) => (
                <span
                    className={`${
                        isLabel
                            ? 'font-bold text-skin-solid text-sm'
                            : 'text-skin-mild text-xs text-right'
                    }  h-5 font-bold border-b-[1px] w-full`}
                >
                    {isLabel
                        ? value
                        : `R$ ${formatString(value, value.length-2)}`}
                </span>
            ))}
        </div>
    );
};

const SpreadSheet: React.FC<{ title: string }> = ({ title }) => {
    const info = [1800340, 168525, 156200, 245810, 1478505, 2584101];
    let data = info.map(item => item.toString())

    return (
        <div className="flex flex-col bg-skin-white px-5 py-9 w-[332px] xl:w-[524px]">
            <span className="font-bold mb-4">{title}</span>
            <div className="flex ">
                <Column
                    title={''}
                    values={[
                        'Patrimônio Líquido',
                        'Faturamento',
                        'EBITDA',
                        'Lucro Líquido',
                        'Endividamento CP',
                        'Endividamento LP',
                    ]}
                    isLabel={true}
                />
                <div className="flex overflow-x-scroll scrollbar-hide">
                <Column title={'2019'} values={data} />
                <Column title={'2020'} values={data} />
                <Column title={'2021'} values={data} isTail={true} />
                </div>
               
            </div>
        </div>
    );
};

export default SpreadSheet;
