import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import SpreadSheet from './SpreadSheet';
import Restritions from './Restritions';

interface Props {
    colour: string;
    value: number;
    description: string;
    percentage?: boolean;
}

const Label: React.FC<Props> = ({ colour, value, description, percentage }) => {
    return (
        <div className="flex items-center gap-2 2xl:gap-8 py-6 sm:px-3 lg:py-0 lg:pb-9">
            <div
                className="px-1 2lg:px-2 py-2 md:py-4 rounded-xl min-w-[80px] 2xl:min-w-[100px] text-center"
                style={{ backgroundColor: colour }}
            >
                <span className="text-white text-base 2xl:text-xl ">
                    {percentage ? `${value} %` : `R$ ${value} M`}
                </span>
            </div>
            <span className="font-bold text-sm sm:text-base lg:text-[15px] 2xl:text-lg">
                {description}
            </span>
        </div>
    );
};

const options: ApexOptions = {
    chart: {
        width: '100%',
    },

    colors: ['#1fab89', '#1fab8980'],
    labels: [''],
    legend: {
        show: false,
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    total: {
                        show: true,
                        showAlways: false,
                    },
                },
            },
        },
    },
};

const FirstSection: React.FC<{}> = () => {
    const series = [1.6, 0.4];
    const series_2 = [1.6, 1.2];

    const info = [1800340, 168525, 156200, 245810, 1478505, 2584101];
    const data = [
        info.map((item) => item.toString()),
        info.map((item) => item.toString()),
        info.map((item) => item.toString()),
    ];

    return (
        <div className="flex flex-col xs:flex-row 2xs:flex-col lg:flex-row gap-4 lg:gap-3 2lg:gap-6 px-6 mb-5">
            <div className="flex flex-col 2xs:flex-row lg:flex-col rounded-2xl gap-2 md:gap-0 2md:gap-5 bg-white m-auto xs:m-0 justify-center items-center lg:items-baseline px-1 w-full xs:w-auto xs:min-w-[170px] xl:min-w-fit shadow-[0_3px_5px_0px_rgba(0,0,0,0.2)]">
                <Label
                    description="Limite"
                    value={series_2[0]}
                    colour="#EBCC86"
                />
                <Label
                    description="Risco"
                    value={series_2[1]}
                    colour="#F4A0A0"
                />
                <Label
                    description="Liquidez"
                    value={80.1}
                    colour="#C4C4C4"
                    percentage={true}
                />
            </div>
            <div className="flex gap-4 lg:gap-3 2lg:gap-6 py-1 overflow-x-scroll scrollbar-hide">
                <div className="bg-white py-9 px-2 lg:px-1 rounded-2xl shadow-[0_3px_5px_0px_rgba(0,0,0,0.2)]">
                    <div className="min-w-[180px] md:min-w-[200px] xl:min-w-[240px]">
                        <ReactApexChart
                            options={options}
                            series={series}
                            type="donut"
                        />
                    </div>

                    <div className="flex flex-col text-center justify-center text-lg gap-2">
                        <span className="text-skin-solid font-bold">
                            Crédito
                        </span>
                        <span className="text-skin-mild font-bold text-sm">
                            Riscos: {series_2[1]} M
                        </span>
                        <div className="h-px mx-14 bg-gradient-radial"></div>
                        <span className="text-skin-mild font-bold text-sm">
                            Limite: {series_2[0]} M
                        </span>
                    </div>
                </div>

                <SpreadSheet
                    title={'Balanço e DRE'}
                    rows={[
                        'Patrimônio Líquido',
                        'Faturamento',
                        'EBITDA',
                        'Lucro Líquido',
                        'Endividamento CP',
                        'Endividamento LP',
                    ]}
                    columns={["2019", "2020", "2021"]}
                    values={data}
                    minWidth={332}
                />

                <Restritions />
            </div>
        </div>
    );
};

export default FirstSection;
