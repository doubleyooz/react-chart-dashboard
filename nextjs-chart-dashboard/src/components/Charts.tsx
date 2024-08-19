import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import SpreadSheet from './SpreadSheet';

const state: { series: any; options: ApexOptions } = {
    series: [
        {
            name: 'A',
            type: 'column',
            data: [23, 11, 22, 22, 37, 21, 44, 22, 30],
        },
        {
            name: 'B',
            type: 'area',
            data: [44, 14, 22, 43, 21, 41, 56, 27, 43],
        },
        {
            name: 'C',
            type: 'line',
            data: [30, 25, 36, 30, 64, 52, 59, 36, 39],
        },
    ],
    options: {
        title: {
            text: 'Histórico de Perfomance',
            align: 'left',
            margin: 0,
            offsetX: 28,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#2D3748',
            },
        },
        chart: {
            width: '100%',
            height: 450,
            type: 'line',
            stacked: false,
        },
        stroke: {
            width: [0, 2, 5],
            curve: 'smooth',
        },
        colors: ['#273B4A', '#4fd1c5', '#1FAB89'],
        plotOptions: {
            bar: {
                columnWidth: '50%',
            },
        },

        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: 'vertical',
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100],
            },
        },
        labels: [
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
            '2019',
            '2020',
            '2021',
            '2022',
        ],
        markers: {
            size: 0,
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: [
            {
                min: 0,
            },
            {
                opposite: true,
            },
        ],
        tooltip: {
            shared: true,
            intersect: false,
        },
    },
};

const state2: { series: any; options: ApexOptions } = {
    series: [
        {
            name: 'Movimentação',
            type: 'column',
            data: [1800340, 168525, 156200, 245810, 1432130, 278505, 2584101],
        },
    ],
    options: {
        title: {
            text: 'Dados Bancários',
            align: 'left',
            margin: 0,
            offsetX: 28,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#2D3748',
            },
        },

        chart: {
            width: '100%',
            height: 450,
            type: 'bar',
        },

        colors: ['#273B4A'],
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },

        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: 'vertical',
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100],
            },
        },

        xaxis: {
            categories: [
                '02/2022',
                '03/2022',
                '04/2022',
                '05/2022',
                '06/2022',
                '07/2022',
                '08/2022',
            ],
        },
        yaxis: {
            max: 3000000,
            labels: {
                show: true,
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
        },
    },
};

const Charts: React.FC<{}> = () => {
    const info = [1800340, 168525, 156200, 245810, 1432130, 278505, 2584101];
    const data = [
        info.map((item) => item.toString()),
        info.map((item) => item.toString()),
    ];
    return (
        <div className="">
            <div className="flex flex-wrap 2lg:flex-nowrap justify-center gap-3 px-6 mb-4">
                <div className="w-full py-7 max-w-[600px] rounded-2xl shadow-[0_3px_5px_0px_rgba(0,0,0,0.2)] bg-white">
                    <ReactApexChart
                        options={state.options}
                        series={state.series}
                        type="line"
                    />
                </div>
                <SpreadSheet
                    title={'Histórico'}
                    rows={[
                        'Pré pagamento',
                        'No vencimento',
                        '1 - 5',
                        '6 - 15',
                        '16 - 30',
                        '31 - 60',
                        '60+',
                    ]}
                    columns={['2019', '2020']}
                    values={[data[0], data[1]]}
                    minWidth={100}
                />
            </div>
            <div className="flex flex-wrap 2lg:flex-nowrap justify-center gap-3 px-6">
                <div className="w-full py-7 max-w-[600px] rounded-2xl shadow-[0_3px_5px_0px_rgba(0,0,0,0.2)] bg-white">
                    <ReactApexChart
                        options={state2.options}
                        series={state2.series}
                        type="bar"
                    />
                </div>
                <SpreadSheet
                    title={'Dados Bancários'}
                    rows={[
                        'A vencer',
                        'Vencido',
                        'Prejuízo',
                        '6 - 15',
                        '16 - 30',
                        '31 - 60',
                        'Instituições',
                    ]}
                    columns={['Dólar', 'Total']}
                    values={[data[0], data[1]]}
                    minWidth={100}
                />
            </div>
        </div>
    );
};
export default Charts;
