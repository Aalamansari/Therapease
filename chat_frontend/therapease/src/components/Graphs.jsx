import React, { useState } from "react";
import ApexCharts from "react-apexcharts";

function Graphs() {
  const [state, setState] = useState({
    series: [
      {
        name: 'Male',
        data: ["22k", "30k", "22k", "30k", "22k", "30k", "22k"]
      },
      {
        name: 'Female',
        data: ["92k", "60k", "22k", "30k", "32k", "10k", "62k",]
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 1450,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%',
          endingShape: 'rounded',
          borderRadius: 5, // Set border radius to 5px
        },
      },
      dataLabels: {
        enabled: false, // Hide the data labels inside the bars
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: [2017, 2018, 2019, 2020, 2021, 2022, 2023],
      },
      yaxis: {
        title: {
          text: '$ (thousands)',
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      },
      colors: ["#F8B042", "#EC6A52"],
    }
  });

  return (
    <div className="App min-h-screen bg-gray-100 flex items-center justify-center lg:mt-12 mt-[-50px] lg:mb-0 mb-[-200px] ">
      <div className="container rounded-[15px] shadow-lg lg:mx-0 md:mx-12 mx-8">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:ml-10 xl:mr-[100px] md:mr-10 mb-5 md:mb-0 text-center md:mx-0  md:text-left">
            <p className="lg:text-[26px] xl:text-[30px] md:text-[20px] text-[18px] left-0 font-semibold text-black sm:px-0 px-4 sm:pt-0 pt-3 ">TOTAL NO OF PEOPLE <br className="sm:block hidden"/> SUFFER FROM <br className="sm:block hidden"/> MENTAL HEALTH</p>
            <p className="text-[26px] xl:text-[30px] font-bold mt-2 md:mt-5 text-yellow">2,60,000</p>
          </div>
          <div className=" lg:w-[720px] md:w-[400px] col-span-3 md:col-span-2 lg:col-span-1 ">
            <ApexCharts
              options={state.options}
              series={state.series}
              type="bar"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphs;