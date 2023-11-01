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
  categoryStates: {
    design: boolean;
    development: boolean;
    security: boolean;
  };
  OrderProjectStatus: {
    design: boolean;
    development: boolean;
    security: boolean;
    periodProgresses: PeriodProgress[];
    [key: string]: boolean | PeriodProgress[];
  };
}
interface PeriodProgress {
  design: number;
  development: number;
  security: number;
}

const DoughnutChartComponent: React.FC<DoughnutChartProps> = ({
  categoryStates,
  OrderProjectStatus,
}) => {
  const progressesDesign = OrderProjectStatus.periodProgresses.reduce(
    (acc, progress) => acc + (progress.design || 0),
    0
  );
  const progressesDevelopment = OrderProjectStatus.periodProgresses.reduce(
    (acc, progress) => acc + (progress.development || 0),
    0
  );
  const progressesSecurity = OrderProjectStatus.periodProgresses.reduce(
    (acc, progress) => acc + (progress.security || 0),
    0
  );

  const clampValue = (value: number) => {
    return Math.min(Math.max(value, 0), 100);
  };

  const clampedDesign = clampValue(progressesDesign);
  const clampedDevelopment = clampValue(progressesDevelopment);
  const clampedSecurity = clampValue(progressesSecurity);

  // console.log("------------");
  // console.log("selectedProj(des) :" + progressesDesign);
  // console.log(`limitation Des (0 - 100) :${clampedDesign}`);
  // console.log("selectedProj(dev) :" + progressesDevelopment);
  // console.log(`limitation Dev (0 - 100) :${clampedDevelopment}`);
  // console.log("selectedProj(secr) :" + progressesSecurity);
  // console.log(`limitation Secr (0 - 100) :${clampedSecurity}`);

  const trueSelectedOrderStatus = Object.keys(OrderProjectStatus).filter(
    (key) => OrderProjectStatus[key] === true
  );

  const total: number = Math.round(
    trueSelectedOrderStatus.reduce((sum, key) => {
      let value;
      switch (key) {
        case "design":
          value = clampedDesign;
          break;
        case "development":
          value = clampedDevelopment;
          break;
        case "security":
          value = clampedSecurity;
          break;
        default:
          value = 0;
      }
      return sum + value;
    }, 0) / 3
  );

  const activeCategory = categoryStates.design
    ? "design"
    : categoryStates.development
    ? "development"
    : categoryStates.security
    ? "security"
    : 0;

  const activePercentage = clampValue(
    activeCategory
      ? OrderProjectStatus.periodProgresses
          .map((progress) => progress[activeCategory])
          .reduce((acc, value) => acc + value, 0)
      : 0
  );

  function fillArrayWithValues(): number[] {
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

    const remainderDes = 100 - (clampedDesign || 0);
    const remainderDev = 100 - (clampedDevelopment || 0);
    const remainderSecr = 100 - (clampedSecurity || 0);

    const designValue = selectedStatus.design
      ? selectedStatus.development || selectedStatus.security
        ? 1
        : 0
      : 1 - 1;
    const developmentValue = selectedStatus.development
      ? selectedStatus.design || selectedStatus.security
        ? 1
        : 0
      : 1 - 1;
    const securityValue = selectedStatus.security
      ? selectedStatus.design || selectedStatus.development
        ? 1
        : 0
      : 1 - 1;
    return [
      selectedStatus.design ? clampedDesign : 0,
      selectedStatus.design ? remainderDes : 0,
      designValue,
      selectedStatus.development ? clampedDevelopment : 0,
      selectedStatus.development ? remainderDev : 0,
      developmentValue,
      selectedStatus.security ? clampedSecurity : 0,
      selectedStatus.security ? remainderSecr : 0,
      securityValue,
    ];
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
        <h1>{activeCategory ? `${activePercentage}%` : `${total}%`}</h1>
      </div>
    </div>
  );
};

export default DoughnutChartComponent;
