import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
import s from "./LineChartComponent.module.scss";

const LineChartComponent = () => {
  const data = () => {
    return {
      labels: ["Week", "1", "2", "3", "4", "5"],
      datasets: [
        {
          label: "design",
          data: [0, 60, 22, 33],
          fill: "start",
          backgroundColor: (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "#ef8a66ab");
            gradient.addColorStop(1, "#ef8a66ab");
            return gradient;
          },
          borderColor: "#febd9dbf",
          borderWidth: 0,
        },
        {
          label: "development",
          data: [0],
          fill: "start",
          backgroundColor: (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "#83addfc9");
            gradient.addColorStop(1, "#c3dcf8b8");
            return gradient;
          },
          borderColor: "#C3DCF8",
          borderWidth: 0,
        },
        {
          label: "security",
          data: [0],
          fill: "start",
          backgroundColor: (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0.15, "#1fd1878a");
            gradient.addColorStop(1, "#34966d59");
            return gradient;
          },
          borderColor: "#1fd18778",
          borderWidth: 0,
        },
      ],
    };
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
    },
    elements: {
      line: {
        tension: 0.3,
      },
    },
    plugins: {
      filler: {
        propagate: false,
      },
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: true,
    },
  };

  return (
    <div className={s.lineChart__сontainer}>
      <Line data={data()} options={options} />
    </div>
  );
};
export default LineChartComponent;
