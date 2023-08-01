import s from "./DesignSection.module.scss";
import Image from "next/image";
import Interactive from "../../../images/services/design/interactive-refinement.svg";
import Reserch from "../../../images/services/design/research-and-planning.svg";
import Responsive from "../../../images/services/design/responsive-design.svg";
import UX from "../../../images/services/design/ux-design.svg";
import Visual from "../../../images/services/design/visual-design.svg";
import Wireframing from "../../../images/services/design/wireframing.svg";
import BigButtonComponent from "../../../components/BigButtonComponent";
import ServiceDesignCardComponent from "../../../components/service/ServiceDesignCardComponent";
import ServiceHeadingComponent from "@/components/service/ServiceHeadingComponent";

const DesignSection = () => {
  interface DesignInfoItem {
    alt: string;
    title: string;
    imageSrc: string;
    description: string;
    id: number;
  }

  const DesignInfo: DesignInfoItem[] = [
    {
      alt: "Visual Design",
      title:
        "We explore a range of design styles to find the best fit for the brand identity and target audience. Our design team works closely with stakeholders to define the visual direction, incorporating elements such as color schemes, typography, imagery, and graphics.",
      imageSrc: Visual,
      description: "Visual Design",
      id: 1,
    },
    {
      alt: "User Experience (UX) Design",
      title:
        "We prioritize user experience by ensuring intuitive navigation, clear information hierarchy, and easy accessibility. We apply user-centric design principles to enhance usability, readability, and overall satisfaction.",
      imageSrc: UX,
      description: "User Experience (UX) Design",
      id: 2,
    },
    {
      alt: "Research and Planning",
      title:
        "At the initial stage, we conduct extensive research to understand the target audience, their preferences, and the specific requirements of the website.",
      imageSrc: Reserch,
      description: "Research and Planning",
      id: 3,
    },
    {
      alt: "Wireframing and Prototyping",
      title:
        "We create wireframes to outline the basic layout and structure of the website, focusing on usability and user experience.",
      imageSrc: Wireframing,
      description: "Wireframing and Prototyping",
      id: 4,
    },
    {
      alt: "Responsive Design",
      title:
        "We implement a responsive approach to guarantee a user-friendly experience across devices. We adapt the layout and content to different screen sizes and resolutions, ensuring optimal display and functionality on desktops, tablets, and mobile devices.",
      imageSrc: Responsive,
      description: "Responsive Design",
      id: 5,
    },
    {
      alt: "Iterative Refinement",
      title:
        " Throughout the design development process, we engage in multiple iterations and refinements based on feedback from stakeholders, usability testing, and user feedback.",
      imageSrc: Interactive,
      description: "Iterative Refinement",
      id: 6,
    },
  ];

  return (
    <section className={`${s.container} ${s.design}`}>
      <ServiceHeadingComponent headingText={"Desing"} container="false" />
      <ul className={s.design__list}>
        {DesignInfo.map((info) => (
          <ServiceDesignCardComponent key={info.id} {...info} />
        ))}
      </ul>
      <div className={s.design__wrapperBtn}>
        <BigButtonComponent />
      </div>
    </section>
  );
};

export default DesignSection;
