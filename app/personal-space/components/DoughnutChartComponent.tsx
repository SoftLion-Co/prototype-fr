import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ScriptableContext,
} from "chart.js";
import { ChartOptions } from "chart.js";
import s from "./DoughnutChartComponent.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  selectedProject: {
    design: number;
    development: number;
    security: number;
  };
  categoryStates: {
    design: boolean;
    development: boolean;
    security: boolean;
  };
  selectedOrderStatus: {
    design: boolean;
    development: boolean;
    security: boolean;
    [key: string]: boolean;
  };
}

const DoughnutChartComponent: React.FC<DoughnutChartProps> = ({
  selectedProject,
  categoryStates,
  selectedOrderStatus,
}) => {
  // if (!selectedProject) {
  //   return null;
  // }

  // const total = Math.round(
  //   (selectedProject.design +
  //     selectedProject.development +
  //     selectedProject.security) /
  //     3
  // );
  const trueSelectedOrderStatus = Object.keys(selectedOrderStatus).filter(
    (key) => selectedOrderStatus[key] === true
  ) as (keyof typeof selectedOrderStatus)[];

  const total: number = Math.round(
    trueSelectedOrderStatus.reduce(
      (sum, key) => sum + selectedProject[key],
      0
    ) / 3
  );

  const activeCategory = categoryStates.design
    ? "design"
    : categoryStates.development
    ? "development"
    : categoryStates.security
    ? "security"
    : 0;

  const activePercentage =
    activeCategory && selectedProject[activeCategory] > 0
      ? selectedProject[activeCategory]
      : 0;

  function fillArrayWithValues(
    selectedProject: DoughnutChartProps["selectedProject"]
  ): number[] {
    if (
      selectedProject.design < 0 ||
      selectedProject.development < 0 ||
      selectedProject.security < 0 ||
      selectedProject.design > 100 ||
      selectedProject.development > 100 ||
      selectedProject.security > 100
    ) {
      console.error("Значення повинні бути в межах від 0 до 100.");
      return [];
    }

    const selectedStatus = {
      design: selectedOrderStatus.design,
      development: selectedOrderStatus.development,
      security: selectedOrderStatus.security,
    };

    if (categoryStates.design) {
      selectedStatus.design = selectedOrderStatus.design;
      selectedStatus.development = !selectedOrderStatus.design;
      selectedStatus.security = !selectedOrderStatus.design;
    }
    if (!categoryStates.security) {
      selectedStatus.design;
      selectedStatus.development;
      selectedStatus.security;
    }
    if (categoryStates.development) {
      selectedStatus.design = !selectedOrderStatus.development;
      selectedStatus.development = selectedOrderStatus.development;
      selectedStatus.security = !selectedOrderStatus.development;
    }
    if (categoryStates.security) {
      selectedStatus.design = !selectedOrderStatus.security;
      selectedStatus.development = !selectedOrderStatus.security;
      selectedStatus.security = selectedOrderStatus.security;
    }
    console.log(selectedStatus);

    const remainderDes = 100 - (selectedProject.design || 0);
    const remainderDev = 100 - (selectedProject.development || 0);
    const remainderSecr = 100 - (selectedProject.security || 0);

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
    console.log(securityValue);
    return [
      selectedStatus.design ? selectedProject.design : 0,
      selectedStatus.design ? remainderDes : 0,
      designValue,
      selectedStatus.development ? selectedProject.development : 0,
      selectedStatus.development ? remainderDev : 0,
      developmentValue,
      selectedStatus.security ? selectedProject.security : 0,
      selectedStatus.security ? remainderSecr : 0,
      securityValue,
    ];
  }

  const result = fillArrayWithValues(selectedProject);

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

  const doughnutOptions: ChartOptions = {
    plugins: {
      legend: {
        display: false,
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
