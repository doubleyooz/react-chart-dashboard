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

    const options: ApexOptions = {
        chart: {
            height: 130,
        },
        colors: ['#1fab89'],
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true,
                        },
                        value: {
                            show: true,
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
                    value={series[0]}
                    colour="#EBCC86"
                />
                <Label description="Risco" value={series[0]} colour="#F4A0A0" />
                <Label
                    description="Liquidez"
                    value={80.1}
                    colour="#C4C4C4"
                    percentage={true}
                />
            </div>
            <div className="bg-white">
                <ReactApexChart
                    options={options}
                    series={series}
                    type="pie"
                  
                />
                <div className="relative rounded-full bg-skin-detail_1 w-20 h-20">
                    <div className="text-center leading-10 absolute top-1/4 left-1/4 rounded-full bg-white bg-opacity-40 w-10 h-10">
                        <span>58</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;
