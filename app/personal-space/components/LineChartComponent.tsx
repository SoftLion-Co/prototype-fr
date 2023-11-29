import { Line } from "react-chartjs-2";
import { useMediaQuery } from "react-responsive";
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
  categoryStates: Record<string, boolean>;
  OrderProjectStatus: {
    periodProgresses: PeriodProgress[];
  };
}

interface PeriodProgress {
  service: Service;
  numberWeek: number;
  progress: number;
}
interface Service {
  title: string;
  description: string;
}
interface CategoryProgress {
  [key: string]: number[];
}

const LineChartComponent: React.FC<LineChartProps> = ({
  OrderProjectStatus,
  categoryStates,
}) => {
  const { periodProgresses } = OrderProjectStatus;
  periodProgresses.sort((a, b) => a.numberWeek - b.numberWeek);

  const labels = Array.from(
    new Set(periodProgresses.map((week) => week.numberWeek))
  )
    .map((weekNumber, index) => (index === 0 ? "Week" : weekNumber.toString()))
    .slice(0, -1);

  const clampValue = (value: number) => {
    return Math.min(Math.max(value, 0), 100);
  };

  const categoryProgress: Record<string, number[]> = {};

  periodProgresses.sort((a, b) =>
    a.service.title.localeCompare(b.service.title)
  );

  periodProgresses.forEach((progress) => {
    const category = progress.service.title;
    if (!categoryProgress[category]) {
      categoryProgress[category] = [];
    }
    categoryProgress[category].push(clampValue(progress.progress || 0));
  });

  const maxDataValue = Math.max(...Object.values(categoryProgress).flat());
  const maxY = maxDataValue + 5 <= 105 ? maxDataValue + 5 : 105;

  const generateChartData = (categoryProgress: CategoryProgress) => {
    const labels = [];
    const data = [];
    const categoryState = !Object.values(categoryStates).some((state) => state);
    for (const category in categoryProgress) {
      labels.push(category);
      data.push(
        categoryStates[category] || categoryState
          ? categoryProgress[category]
          : 0
      );
    }

    return { labels, data };
  };
  const isMobile = useMediaQuery({ maxWidth: 767.98 });

  const chartData = generateChartData(categoryProgress);
  const dataline = {
    labels: labels,
    datasets: chartData.data.map((dataArr, index) => ({
      label: chartData.labels[index],
      data: dataArr,
      fill: "start",
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;

        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        switch (index) {
          case 0:
            gradient.addColorStop(0.2, "#ef8a66ab");
            gradient.addColorStop(1, "#ef8a66ab");
            break;
          case 1:
            gradient.addColorStop(0, "#83addfc9");
            gradient.addColorStop(1, "#c3dcf8b8");
            break;
          case 2:
            gradient.addColorStop(0.2, "#13eb9080");
            gradient.addColorStop(1, "#3b8d61c4");
            break;
          case 3:
            gradient.addColorStop(0.2, "#fff493bf");
            gradient.addColorStop(1, "#FFD600");
            break;
          case 4:
            gradient.addColorStop(0.2, "#d1090569");
            gradient.addColorStop(1, "#e5181894");
            break;
          case 5:
            gradient.addColorStop(0.2, "#a154d175");
            gradient.addColorStop(1, "#5F1F75");
            break;
          case 6:
            gradient.addColorStop(0.2, "#4d3fed75");
            gradient.addColorStop(1, "#3721BD");
            break;
          case 7:
            gradient.addColorStop(0.2, "#7B1608");
            gradient.addColorStop(1, "#b01d00d4");
            break;
          case 8:
            gradient.addColorStop(0.2, "#46cf3aab");
            gradient.addColorStop(1, "#2A9E5F");
            break;
          case 9:
            gradient.addColorStop(0.2, "#f65a93ab");
            gradient.addColorStop(1, "#E238B2");
            break;
          default:
            const opacity = 0.14;
            const color = `rgba(${Math.floor(
              Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
              Math.random() * 256
            )}, ${opacity})`;
            gradient.addColorStop(0.2, color);
            gradient.addColorStop(1, color);
            break;
        }

        return gradient;
      },
      borderWidth: 0,
    })),
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
            size: isMobile ? 10 : 14,
            weight: 400 as any,
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
          size: isMobile ? 10 : 14,
          weight: 400 as any,
        },
      },
      tooltip: {
        titleFont: {
          size: isMobile ? 5 : 14,
        },

        bodyFont: {
          size: isMobile ? 4 : 10,
        },
      },
    },
    interaction: {
      intersect: true,
    },
  };

  return (
    <div className={s.lineChart__сontainer}>
      <div className={s.lineChart}>
        <Line data={dataline} options={options} />
      </div>
    </div>
  );
};
export default LineChartComponent;
