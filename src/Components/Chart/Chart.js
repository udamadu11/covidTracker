import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import Styles from "./chart.module.css";
import { fetchDailyData } from "../../api/index";
const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };
    fetchApi();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "rgba(255,0,0,0.5)",
            backgroundColor: "red",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return <div className={Styles.container}>{lineChart}</div>;
};

export default Chart;
