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
  const clampValue = (value: number) => {
    return Math.min(Math.max(value, 0), 100);
  };

  const categoryProgress: Record<string, number> = {};

  OrderProjectStatus.periodProgresses.sort((a, b) =>
    a.service.title.localeCompare(b.service.title)
  );

  OrderProjectStatus.periodProgresses.forEach((progress) => {
    const category = progress.service.title;

    categoryProgress[category] = clampValue(
      (categoryProgress[category] || 0) + (progress.progress || 0)
    );
  });

  console.log(categoryStates);
  console.log(categoryProgress);

  const totalPercentage = Math.round(
    Object.values(categoryProgress).reduce((acc, val) => acc + val, 0) /
      Object.keys(categoryProgress).length
  );
  console.log(`totalPercentage: ${totalPercentage}%`);

  const activeCategory = Object.keys(categoryStates).find(
    (category) => categoryStates[category]
  );
  console.log(`activeCategory: ${activeCategory}`);

  const activePercentage = activeCategory
    ? categoryProgress[activeCategory]
    : totalPercentage;
  console.log(`activePercentage: ${activePercentage}%`);

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
    labels: [
      "design",
      "empty",
      "",
      "development",
      "empty",
      "",
      "security",
      "empty",
      "",
    ],
    datasets: [
      {
        data: result,
        backgroundColor: (context: ScriptableContext<"doughnut">) => {
          const index = context.dataIndex;
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 50, 300, 110);
          if (index === 0) {
            gradient.addColorStop(0.4, "#f7cdf5a6");
            gradient.addColorStop(1, "#f4a78994");
          } else if (index === 1) {
            gradient.addColorStop(0, "#EDEDED");
            gradient.addColorStop(1, "#EDEDED");
          } else if (index === 3) {
            gradient.addColorStop(0.4, "#83addf8f");
            gradient.addColorStop(1, "#308bb7b3");
          } else if (index === 4) {
            gradient.addColorStop(0, "#EDEDED");
            gradient.addColorStop(1, "#EDEDED");
          } else if (index === 6) {
            gradient.addColorStop(0.2, "#13eb9080");
            gradient.addColorStop(1, "#3b8d61c4");
          } else if (index === 7) {
            gradient.addColorStop(0, "#EDEDED");
            gradient.addColorStop(1, "#EDEDED");
          } else if (index === 9) {
            gradient.addColorStop(0.2, "#f4a78994");
            gradient.addColorStop(1, "#3b8d61c4");
          } else if (index === 10) {
            gradient.addColorStop(0, "#EDEDED");
            gradient.addColorStop(1, "#EDEDED");
          } else if (index === 12) {
            gradient.addColorStop(0.2, "#f4a78994");
            gradient.addColorStop(1, "#83addf8f");
          } else if (index === 13) {
            gradient.addColorStop(0, "#EDEDED");
            gradient.addColorStop(1, "#EDEDED");
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
      <div className={s.title}>
        <h1>{`${activePercentage}%`}</h1>
      </div>
    </div>
  );
};

export default DoughnutChartComponent;
