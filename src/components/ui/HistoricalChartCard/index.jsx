import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";

const HistoricalChartCard = ({ historicalChartData, currentCrypto }) => {

  const options = {
    title: {
      text: '',
    },
    xAxis: {
      type: 'datetime',
      title: { text: 'Fecha' },
      labels: {
        format: '{value:%e %b}'
      }
    },
    yAxis: {
      title: { text: 'Precio (USD)' },
      labels: {
        formatter: function () {
          return '$' + Highcharts.numberFormat(this.value / 1000, 0) + 'K';
        }
      },
    },
    tooltip: {
      shared: true,
      xDateFormat: '%A, %e %B %Y',
      pointFormatter: function () {
        return `<span style="color:${this.color}">\u25CF</span> ${this.series.name}: <b>$${Highcharts.numberFormat(this.y, 2)}</b><br/>`;
      }
    },
    series: [
      {
        name: 'Precio',
        data: historicalChartData.prices ? [...historicalChartData.prices] : [],
        color: (currentCrypto.market_data?.price_change_percentage_7d > 0) ? "#00BC7D" : "#FB2C36"
      },
    ],
  };

  return(
    <div className="w-full p-4 bg-white rounded-2xl shadow-md shadow-indigo-100 h-[500]">

      <h2 className='text-2xl font-bold p-2 mb-2'>
        Precio de los últimos 7 días
      </h2>

      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />      

    </div>
  );
}

export { HistoricalChartCard }