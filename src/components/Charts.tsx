import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

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
            '2022'
        ],
        markers: {
            size: 0,
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            min: 0,
        },
        tooltip: {
            shared: true,
            intersect: false,
        },
    },
};

const Charts: React.FC<{}> = () => {
    return (
        <div>
            <div>
                <div className="min-w-[180px] md:min-w-[200px] xl:min-w-[240px] py-7 rounded-2xl shadow-[0_3px_5px_0px_rgba(0,0,0,0.2)] bg-white">
                    <ReactApexChart
                        options={state.options}
                        series={state.series}
                        type="line"
                    />
                </div>
            </div>
        </div>
    );
};
export default Charts;
