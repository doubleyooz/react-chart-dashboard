import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface Props {
    colour: string;
    value: number;
    description: string;
    percentage?: boolean;
}

const Label: React.FC<Props> = ({ colour, value, description, percentage }) => {
    return (
        <div className="flex items-center gap-8 pb-9">
            <div
                className="px-2 py-4 rounded-xl min-w-[100px] text-center"
                style={{ backgroundColor: colour }}
            >
                <span className="text-white text-xl ">
                    {percentage ? `${value} %` : `R$ ${value} M`}
                </span>
            </div>
            <span className="font-bold text-lg">{description}</span>
        </div>
    );
};

const FirstSection: React.FC<{}> = () => {
    const series = [1.6, 0.4];
    const series_2 = [1.6, 1.2];

    const options: ApexOptions = {
        chart: {
            height: 130,
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

    return (
        <div className="flex gap-6 ">
            <div className="bg-white px-4 py-8">
                <Label
                    description="Limite"
                    value={series_2[0]}
                    colour="#EBCC86"
                />
                <Label description="Risco" value={series_2[1]} colour="#F4A0A0" />
                <Label
                    description="Liquidez"
                    value={80.1}
                    colour="#C4C4C4"
                    percentage={true}
                />
            </div>
            <div className=''>
                <div className="bg-white py-9 px-2">
                    <ReactApexChart
                        options={options}
                        series={series}
                        type="donut"
                    />
                    <div className="flex flex-col text-center justify-center text-lg gap-2">
                        <span className='text-skin-solid font-bold'>Crédito</span>
                        <span className='text-skin-mild font-bold text-sm'>Riscos: {series_2[1]} M</span>
                        <div className='h-px mx-14 bg-gradient-radial'></div>
                        <span className='text-skin-mild font-bold text-sm'>Limite: {series_2[0]} M</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;
