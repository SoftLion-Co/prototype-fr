// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// import DoughnutChartComponent from "@/app/personal-space/components/DoughnutChartComponent";
// import LineChartComponent from "@/app/personal-space/components/LineChartComponent";

// import s from "./ProjectSection.module.scss";
// import { useOrderProjectStatus } from "@/hooks/useOrderProjectStatus";
// import ProductListComponent from "./../../personal-space/components/ProductListComponent";
// import Designer from "@/images/personale-space/label-icon-design.svg";
// import Development from "@/images/personale-space/label-icon-development.svg";
// import Security from "@/images/personale-space/label-icon-security.svg";

// interface ProjectSectionProps {
//   projectName: string;
//   // orderProjectStatus: OrderProjectStatus[] | null;
// }
// type Category = "designer" | "development" | "security";

// interface ProjectData {
//   id: string;
//   title: string;
//   numberWeek: number;
//   designer: number;
//   development: number;
//   security: number;
// }
// interface CategoryValues {
//   designer: boolean;
//   development: boolean;
//   security: boolean;
// }
// interface OrderStatus {
//   id: string;
//   title: string;
//   projectStatus: number;
//   designer: boolean;
//   development: boolean;
//   security: boolean;
// }

// const ProjectSection = ({ projectName }: ProjectSectionProps) => {
//   const { orderProjecData, isLoading, error } = useOrderProjectStatus();

//   const imageList: Record<Category, string> = {
//     designer: Designer,
//     development: Development,
//     security: Security,
//   };
//   const categoryList: Category[] = ["designer", "development", "security"];

//   const [categoryStates, setCategoryStates] = useState<CategoryValues>({
//     designer: false,
//     development: false,
//     security: false,
//   });

//   // const orderStatus: { [key: string]: OrderStatus } = {
//   //   project1: {
//   //     id: "project1",
//   //     title: "Dior",
//   //     projectStatus: 0,
//   //     designer: false,
//   //     development: false,
//   //     security: false,
//   //   },
//   //   project2: {
//   //     id: "project2",
//   //     title: "Trend",
//   //     projectStatus: 0,
//   //     designer: true,
//   //     development: true,
//   //     security: true,
//   //   },
//   //   project3: {
//   //     id: "project3",
//   //     title: "Move",
//   //     projectStatus: 0,
//   //     designer: true,
//   //     development: true,
//   //     security: true,
//   //   },
//   // };

//   // const dataProject: { [key: string]: ProjectData } = {
//   //   project1: {
//   //     id: "project1",
//   //     title: "Dior",
//   //     numberWeek: 0,
//   //     designer: 50,
//   //     development: 60,
//   //     security: 60,
//   //   },
//   //   project2: {
//   //     id: "project2",
//   //     title: "Trend",
//   //     numberWeek: 0,
//   //     designer: 30,
//   //     development: 35,
//   //     security: 40,
//   //   },
//   //   project3: {
//   //     id: "project3",
//   //     title: "Move",
//   //     numberWeek: 0,
//   //     designer: 49,
//   //     development: 60,
//   //     security: 71,
//   //   },
//   // };

//   // const selectedProject = Object.values(dataProject).find(
//   //   (project) => project.title === projectName
//   // );

//   // const selectedOrderStatus = Object.values(orderStatus).find(
//   //   (project) => project.title === projectName
//   // );

//   const OrderProjectStatus = Object.values(orderProjecData).find(
//     (project) => project.title === projectName
//   );

//   console.log("BACKEND");
//   console.log(OrderProjectStatus?.periodProgresses);

//   const handleCategoryClick = (category: keyof typeof categoryStates) => {
//     setCategoryStates((prevState) => {
//       const updatedState = { ...prevState };
//       if (updatedState[category]) {
//         // Якщо категорія вже активна, деактивуємо її
//         updatedState[category] = false;
//       } else {
//         // Деактивуємо всі інші категорії і активуємо обрану
//         updatedState.designer = false;
//         updatedState.development = false;
//         updatedState.security = false;
//         updatedState[category] = true;
//       }
//       return updatedState;
//     });
//   };

//   const isButtonActive =
//     OrderProjectStatus &&
//     (OrderProjectStatus.designer ||
//       OrderProjectStatus.development ||
//       OrderProjectStatus.security);

//   return (
//     <>
//       <h1 className={s.project__title}>{projectName}</h1>
//       <div className={s.block}>
//         {categoryList.map((category) => (
//           <div className={s.block__item} key={category}>
//             <Image src={imageList[category]} alt={category} />
//             <h2
//               className={`${s.block__label} ${
//                 categoryStates[category] ? "" : s.active
//               } ${OrderProjectStatus[category] ? "" : s.inactive}`}
//               onClick={() => handleCategoryClick(category)}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </h2>
//           </div>
//         ))}
//       </div>

//       <section className={s.project__section}>
//         <div className={s.section__container}>
//           {isButtonActive ? (
//             <>
//               <h2 className={s.title}>General Information</h2>
//               <div className={s.chart__сontainer}>
//                 <LineChartComponent />
//                 <DoughnutChartComponent
//                 OrderProjectStatus={OrderProjectStatus}
//                   // selectedProject={selectedProject}
//                   // selectedOrderStatus={selectedOrderStatus}
//                   categoryStates={categoryStates}
//                 />
//               </div>
//             </>
//           ) : (
//             <h2 className={s.error__message}>Nothing found for your request</h2>
//           )}
//         </div>
//         <ProductListComponent
//           categoryStates={categoryStates}
//           isButtonActive={isButtonActive}
//           OrderProjectStatus={OrderProjectStatus}
//           // selectedOrderStatus={selectedOrderStatus}
//         />
//       </section>
//     </>
//   );
// };

// export default ProjectSection;
