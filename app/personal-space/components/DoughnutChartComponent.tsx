import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ScriptableContext,
} from "chart.js";
import s from "./DoughnutChartComponent.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
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

const DoughnutChartComponent: React.FC<DoughnutChartProps> = ({
  categoryStates,
  OrderProjectStatus,
}) => {
  const { periodProgresses } = OrderProjectStatus;
  const clampValue = (value: number) => {
    return Math.min(Math.max(value, 0), 100);
  };

  const categoryProgress: Record<string, number> = {};

  periodProgresses.sort((a, b) =>
    a.service.title.localeCompare(b.service.title)
  );

  periodProgresses.forEach((progress) => {
    const category = progress.service.title;

    categoryProgress[category] = clampValue(
      (categoryProgress[category] || 0) + (progress.progress || 0)
    );
  });

  const totalPercentage = Math.round(
    Object.values(categoryProgress).reduce((acc, val) => acc + val, 0) /
      Object.keys(categoryProgress).length
  );

  const activeCategory = Object.keys(categoryStates).find(
    (category) => categoryStates[category]
  );

  const activePercentage = activeCategory
    ? categoryProgress[activeCategory]
    : totalPercentage;

  function fillArrayWithValues(): number[] {
    const categoryState = !Object.values(categoryStates).some((state) => state);
    const percentages: Record<string, number> = {};
    Object.keys(categoryProgress).forEach((category) => {
      percentages[category] = categoryProgress[category] - 100;
    });
    const result: number[] = [];
    Object.keys(percentages).forEach((category) => {
      result.push(
        categoryStates[category] || categoryState
          ? categoryProgress[category]
          : 0
      );
      result.push(
        categoryStates[category] || categoryState ? percentages[category] : 0
      );
      result.push(
        categoryStates[category]
          ? 0
          : !Object.values(categoryStates).some((state) => state)
          ? 1
          : 0
      );
    });

    return result;
  }

  const result = fillArrayWithValues();

  const dataDoughnut = {
    // labels: [],
    datasets: [
      {
        data: result,
        backgroundColor: (context: ScriptableContext<"doughnut">) => {
          const index = context.dataIndex;
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 50, 300, 110);
          switch (index) {
            case 0:
              gradient.addColorStop(0.4, "#f7cdf5a6");
              gradient.addColorStop(1, "#F4A789");
              break;
            case 1:
            case 4:
            case 7:
            case 10:
            case 13:
            case 16:
            case 19:
            case 22:
            case 25:
            case 28:
              gradient.addColorStop(0, "#EDEDED");
              gradient.addColorStop(1, "#EDEDED");
              break;
            case 3:
              gradient.addColorStop(0.4, "#83addf8f");
              gradient.addColorStop(1, "#3089b5b3");
              break;
            case 6:
              gradient.addColorStop(0.2, "#13eb9080");
              gradient.addColorStop(1, "#3b8d61c4");
              break;
            case 9:
              gradient.addColorStop(0.2, "#fff493db");
              gradient.addColorStop(1, "#FFD600");
              break;
            case 12:
              gradient.addColorStop(0.2, "#d1090575");
              gradient.addColorStop(1, "#E51818");
              break;
            case 15:
              gradient.addColorStop(0.2, "#a154d175");
              gradient.addColorStop(1, "#5F1F75");
              break;
            case 18:
              gradient.addColorStop(0.2, "#4d3fed75");
              gradient.addColorStop(1, "#3721BD");
              break;
            case 21:
              gradient.addColorStop(0.2, "#7B1608");
              gradient.addColorStop(1, "#b01d00d4");
              break;
            case 24:
              gradient.addColorStop(0.2, "#46cf3aab");
              gradient.addColorStop(1, "#2A9E5F");
              break;
            case 27:
              gradient.addColorStop(0.2, "#f65a93ab");
              gradient.addColorStop(1, "#E238B2");
              break;
          }

          return gradient;
        },
        borderWidth: 0,
        hoverOffset: 0,
      },
    ],
  };
  const doughnutOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className={s.wrapper}>
      <Doughnut data={dataDoughnut} options={doughnutOptions} />
      <div className={s.block}>
        <h1 className={s.block__title}>{`${activePercentage}%`}</h1>
      </div>
    </div>
  );
};

export default DoughnutChartComponent;
