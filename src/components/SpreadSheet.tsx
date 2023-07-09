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

const formatLabel = (str: string): string => {
    switch (Math.ceil(str.length / 10)) {
        case 0:
            return str;
        case 1:
            return str;
        default:
            const arr = str.split(' ');
            if (arr.length >= 3) return formatLabel(arr[0] + ' ' + arr[1]);

            return arr[0].length < 4
                ? str
                : arr.length > 1
                ? arr[0].charAt(0) + '. ' + arr[1]
                : arr[0];
    }
};

const Column: React.FC<Props> = ({ title, values, isLabel, isTail }) => {
    return (
        <div
            className={`${
                isLabel ? 'w-36' : 'w-24'
            } flex flex-col text-skin-solid gap-3 items-center`}
        >
            <span
                className={`${
                    title === '' ? 'h-4 xl:h-5' : ''
                } w-24 text-xs xl:text-sm 2xl:text-base font-bold text-right`}
            >
                {title}
            </span>
            {values.map((value, i) => (
                <span
                    key={value + i}
                    className={`${
                        isLabel
                            ? 'font-bold text-skin-solid text-sm'
                            : 'text-skin-mild text-[11px] xl:text-xs text-right'
                    }  h-6 xl:h-5 pb-4 xl:py-0 font-bold border-b-[1px] w-full`}
                >
                    {isLabel
                        ? formatLabel(value)
                        : `R$ ${formatString(value, value.length - 2)}`}
                </span>
            ))}
        </div>
    );
};

interface SpreadSheetProps {
    title: string;
    rows: string[];
    columns: string[];
    values: string[][];
    minWidth: number;
}

const SpreadSheet: React.FC<SpreadSheetProps> = ({
    title,
    rows,
    columns,
    values,
    minWidth,
}) => {
    return (
        <div
            className={`flex flex-col bg-skin-white px-[18px] py-9 w-[${minWidth}px] xl:w-[524px] rounded-2xl shadow-[0_3px_5px_0px_rgba(0,0,0,0.2)]`}
        >
            <span className="font-bold mb-4">{title}</span>
            <div className="flex ">
                <Column title={''} values={rows} isLabel={true} />
                <div className="flex overflow-x-scroll scrollbar-hide">
                    {columns.map((column, i) => (
                        <Column
                            key={i + column}
                            title={column}
                            values={values[i]}
                            isTail={i === values.length}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpreadSheet;
