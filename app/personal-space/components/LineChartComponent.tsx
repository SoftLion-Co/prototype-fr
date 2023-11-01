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

interface LineChartProps {
  OrderProjectStatus: {
    design: boolean;
    development: boolean;
    security: boolean;
    periodProgresses: PeriodProgress[];
  };
  categoryStates: {
    design: boolean;
    development: boolean;
    security: boolean;
  };
}

interface PeriodProgress {
  design: number;
  development: number;
  security: number;
  numberWeek: number;
}

// const LineChartComponent = () => {
const LineChartComponent: React.FC<LineChartProps> = ({
  OrderProjectStatus,
  categoryStates,
}) => {
  const { periodProgresses } = OrderProjectStatus;
  periodProgresses.sort((a, b) => a.numberWeek - b.numberWeek);
  // console.log(periodProgresses);

  const selectedStatus = {
    design: OrderProjectStatus.design,
    development: OrderProjectStatus.development,
    security: OrderProjectStatus.security,
  };

  if (categoryStates.design) {
    selectedStatus.design = OrderProjectStatus.design;
    selectedStatus.development = !OrderProjectStatus.design;
    selectedStatus.security = !OrderProjectStatus.design;
  }
  if (!categoryStates.security) {
    selectedStatus.design;
    selectedStatus.development;
    selectedStatus.security;
  }
  if (categoryStates.development) {
    selectedStatus.design = !OrderProjectStatus.development;
    selectedStatus.development = OrderProjectStatus.development;
    selectedStatus.security = !OrderProjectStatus.development;
  }
  if (categoryStates.security) {
    selectedStatus.design = !OrderProjectStatus.security;
    selectedStatus.development = !OrderProjectStatus.security;
    selectedStatus.security = OrderProjectStatus.security;
  }

  // Створюємо labels
  const labels = [
    ...periodProgresses.map((_, index) =>
      index === 0 ? "Week" : index.toString()
    ),
  ];

  // Створюємо окремі набори даних для кожного типу
  const designData = [...periodProgresses.map((progress) => progress.design)];
  const developmentData = [
    ...periodProgresses.map((progress) => progress.development),
  ];
  const securityData = [
    ...periodProgresses.map((progress) => progress.security),
  ];

  const clampValue = (values: number[]) => {
    return values.map((value) => Math.min(Math.max(value, 0), 100));
  };

  const clampedDesign = clampValue(designData);
  const clampedDevelopment = clampValue(developmentData);
  const clampedSecurity = clampValue(securityData);

  // console.log("BIG DES = " + clampedDesign);
  // console.log("BIG DEV = " + clampedDevelopment);
  // console.log("BIG SECR = " + clampedSecurity);

  const maxDataValue = Math.max(
    ...clampedDesign,
    ...clampedDevelopment,
    ...clampedSecurity
  );

  const maxY = maxDataValue + 5 <= 105 ? maxDataValue + 5 : 105;
  // console.log(labels);
  // console.log(designData);
  // console.log(developmentData);
  // console.log(securityData);

  const data = () => {
    return {
      labels: labels,
      datasets: [
        {
          label: "design",
          data: selectedStatus.design ? clampedDesign : 0,
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
          data: selectedStatus.development ? clampedDevelopment : 0,
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
          data: selectedStatus.security ? clampedSecurity : 0,
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
        ticks: {
          font: {
            size: 15,
            weight: 600 as any,
          },
        },
      },
      y: {
        max: maxY,
        min: 0,
        ticks: {
          display: false,
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: 5,
        },
      },
    },
    elements: {
      line: {
        tension: 0.3,
      },
      // point: {
      //   radius: 3,
      // },
    },
    plugins: {
      filler: {
        propagate: false,
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Progress",
        align: "start" as const,
        font: {
          size: 14,
          weight: 600 as any,
        },
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
