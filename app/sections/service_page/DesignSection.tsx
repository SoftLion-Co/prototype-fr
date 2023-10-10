import s from "./DesignSection.module.scss";
import Interactive from "../../../images/services/design/interactive-refinement.svg";
import Reserch from "../../../images/services/design/research-and-planning.svg";
import Responsive from "../../../images/services/design/responsive-design.svg";
import UX from "../../../images/services/design/ux-design.svg";
import Visual from "../../../images/services/design/visual-design.svg";
import Wireframing from "../../../images/services/design/wireframing.svg";
import BigButtonComponent from "../../../components/service/BigButtonComponent";
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
        "Our design team uses a variety of design styles to create a visual identity that is both appealing and effective for the target audience. We work closely with stakeholders to understand their needs and goals, and to create a design that is both visually appealing and functionally sound.",
      imageSrc: Visual,
      description: "Visual Design",
      id: 1,
    },
    {
      alt: "User Experience (UX) Design",
      title:
        "We focus on user experience by creating intuitive navigation, clear information hierarchy, and easy accessibility. We use user-centered design principles to improve usability, readability, and overall satisfaction.",
      imageSrc: UX,
      description: "User Experience (UX) Design",
      id: 2,
    },
    {
      alt: "Research and Planning",
      title:
        "We begin the website development process with a comprehensive research phase to understand the target audience, their needs, and the goals of the website. We use this information to create a design that is both user-friendly and effective.",
      imageSrc: Reserch,
      description: "Research and Planning",
      id: 3,
    },
    {
      alt: "Wireframing and Prototyping",
      title:
        "We use wireframes to create a visual representation of the website's layout and structure. We focus on usability and user experience to ensure that the website is easy to use and navigate.",
      imageSrc: Wireframing,
      description: "Wireframing and Prototyping",
      id: 4,
    },
    {
      alt: "Responsive Design",
      title:
        "We use responsive web design to create websites that look and function well on all devices. We adapt the layout and content to different screen sizes and resolutions to ensure that the website is easy to use and navigate, regardless of the device being used.",
      imageSrc: Responsive,
      description: "Responsive Design",
      id: 5,
    },
    {
      alt: "Iterative Refinement",
      title:
        "We use an iterative design process to ensure that the website meets the needs of all stakeholders. We collect feedback from stakeholders, usability testers, and users to make improvements throughout the development process.",
      imageSrc: Interactive,
      description: "Iterative Refinement",
      id: 6,
    },
  ];

  return (
    <section className={`${s.container} ${s.design}`}>
      <div className={s.design__heading}>
        <ServiceHeadingComponent headingText={"Desing"} container={false} />
      </div>
      <ul className={s.design__list}>
        {DesignInfo.map((info) => (
          <ServiceDesignCardComponent key={info.id} {...info} />
        ))}
      </ul>
      <div className={s.blur}>
        <div className={s.blur_item}></div>
      </div>
      <div className={s.design__wrapperBtn}>
        <BigButtonComponent />
      </div>
    </section>
  );
};

export default DesignSection;
