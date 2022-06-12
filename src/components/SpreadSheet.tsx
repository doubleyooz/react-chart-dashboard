interface Props {
    title: string;
    values: number[];
    isLabel?: boolean;
}

const Line: React.FC<Props> = ({ title, values, isLabel }) => {
    return (
        <div className="flex gap-5 border-b-[1px] my-2">
            <span className="w-40 text-xs xl:text-sm 2xl:text-base font-bold">{title}</span>
            <div className="flex text-skin-solid gap-3 items-center">
                {values.map((value, i) => (
                    <span
                        className={`${
                            isLabel
                                ? 'text-right font-bold text-skin-solid'
                                : 'text-skin-mild'
                        } text-xs  font-bold`}
                    >
                        {isLabel ? value : `RS ${value.toFixed(2)}`}
                    </span>
                ))}
            </div>
        </div>
    );
};

const SpreadSheet: React.FC<{ title: string }> = ({ title }) => {
    const data = [1800340, 168525, 156200];
    return (
        <div className="bg-skin-white px-5 py-9">
            <span className="font-bold mb-4">{title}</span>
            <Line title={''} values={[2019, 2020, 2021]} isLabel={true}/>
            <Line title={'Patrimônio Líquido'} values={data} />
            <Line title={'Faturamento'} values={data} />
            <Line title={'EBITDA'} values={data} />
            <Line title={'Lucro Líquido'} values={data} />
            <Line title={'Endividamento CP'} values={data} />
            <Line title={'Endividamento LP'} values={data} />
        </div>
    );
};

export default SpreadSheet;
