import s from "./DesignSection.module.scss";
import Image from "next/image";
import Interactive from "../../../images/services/design/interactive-refinement.svg";
import Reserch from "../../../images/services/design/research-and-planning.svg";
import Responsive from "../../../images/services/design/responsive-design.svg";
import UX from "../../../images/services/design/ux-design.svg";
import Visual from "../../../images/services/design/visual-design.svg";
import Wireframing from "../../../images/services/design/wireframing.svg";
import MainButtonComponent from "../../../components/MainButtonComponent";

const DesignSection = () => {
  return (
    <div className={`${s.container} ${s.design}`}>
      <ul className={s.design__list}>
        <li className={s.design__listItem}>
          <div className={s.design__wrapperInfImg}>
            <Image
              alt="Visual Design"
              src={Visual}
              className={s.design__image}
            />
            <h3 className={s.design__descriptionVisual}>Visual Design</h3>
          </div>
          <p className={s.design__text}>
            We explore a range of design styles to find the best fit for the
            brand identity and target audience. Our design team works closely
            with stakeholders to define the visual direction, incorporating
            elements such as color schemes, typography, imagery, and graphics.
          </p>
        </li>
        <li className={s.design__listItem}>
          <div className={s.design__wrapperInfImg}>
            <Image
              alt="User Experience (UX) Design"
              src={UX}
              className={s.design__image}
            />
            <h3 className={s.design__descriptionUser}>
              User Experience (UX) Design
            </h3>
          </div>
          <p className={s.design__text}>
            We prioritize user experience by ensuring intuitive navigation,
            clear information hierarchy, and easy accessibility. We apply
            user-centric design principles to enhance usability, readability,
            and overall satisfaction.
          </p>
        </li>
        <li className={s.design__listItem}>
          <div className={s.design__wrapperInfImg}>
            <Image
              alt="Research and Planning"
              src={Reserch}
              className={s.design__imageResearch}
            />
            <h3 className={s.design__descriptionResearch}>
              Research and Planning
            </h3>
          </div>

          <p className={s.design__text}>
            At the initial stage, we conduct extensive research to understand
            the target audience, their preferences, and the specific
            requirements of the website.
          </p>
        </li>
        <li className={s.design__listItem}>
          <div className={s.design__wrapperInfImg}>
            <Image
              alt="Wireframing and Prototyping"
              src={Wireframing}
              className={s.design__image}
            />
            <h3 className={s.design__descriptionWireframing}>
              Wireframing and Prototyping
            </h3>
          </div>
          <p className={s.design__text}>
            We create wireframes to outline the basic layout and structure of
            the website, focusing on usability and user experience.
          </p>
        </li>
        <li className={s.design__listItem}>
          <div className={s.design__wrapperInfImg}>
            <Image
              alt="Responsive Design"
              src={Responsive}
              className={s.design__image}
            />
            <h3 className={s.design__descriptionResponsive}>
              Responsive Design
            </h3>
          </div>
          <p className={s.design__text}>
            We implement a responsive approach to guarantee a user-friendly
            experience across devices. We adapt the layout and content to
            different screen sizes and resolutions, ensuring optimal display and
            functionality on desktops, tablets, and mobile devices.
          </p>
        </li>
        <li className={s.design__listItem}>
          <div className={s.design__wrapperInfImg}>
            <Image
              alt="Iterative Refinement"
              src={Interactive}
              className={s.design__image}
            />
            <h3 className={s.design__descriptionIterative}>
              Iterative Refinement
            </h3>
          </div>
          <p className={s.design__text}>
            Throughout the design development process, we engage in multiple
            iterations and refinements based on feedback from stakeholders,
            usability testing, and user feedback.
          </p>
        </li>
      </ul>
      <MainButtonComponent className={s.design__btn}>
        Book Consultation
      </MainButtonComponent>
    </div>
  );
};

export default DesignSection;
