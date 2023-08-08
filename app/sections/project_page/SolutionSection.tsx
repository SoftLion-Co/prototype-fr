import s from "./SolutionSection.module.scss";
import ServiceHeadingComponent from "@/components/service/ServiceHeadingComponent";
import HeadingOurProjectComponent from "../../../components/project/HeadingOurProjectComponent";

interface DesignInfoItem {
  title: string;
  description: string;
}

const Silutioninfo: DesignInfoItem[] = [
  {
    title: "",
    description:
      "Upon receiving your request, we proceed to review and analyze all the details. Our experts study your requirements and expectations, conducting additional research if necessary, to ensure successful project implementation.",
  },
  {
    title: "Analytics and Tracking",
    description:
      "Integrated robust analytics and tracking tools, such as Google Analytics, to collect valuable data on website visits, user behavior, and conversions. Utilized this data to gain insights into user preferences, measure the effectiveness of marketing strategies, and make data-driven decisions for further improvements.",
  },
  {
    title: "Fast Page Loading",
    description:
      "Implemented various optimization techniques to enhance page loading speed and performance. This included optimizing image sizes, minimizing file sizes, leveraging caching mechanisms, and utilizing content delivery networks (CDNs) to deliver content efficiently. As a result, visitors experience fast and responsive page loading, ensuring a positive user experience.",
  },
  {
    title: "Support and After-Sales Service",
    description:
      "Established a reliable support system to address customer inquiries, concerns, and provide assistance throughout the customer journey. Implemented live chat support, email ticketing systems, and a dedicated customer support team to ensure prompt and efficient resolution of customer issues, fostering reliable cooperation and customer satisfaction. ",
  },
];

const SolutionSection = () => {
  return (
    <section className={`${s.container} ${s.solution}`}>
      <div className={s.solution__heading}>
        <HeadingOurProjectComponent title="02" text="Solution" />
      </div>
      <ul className={s.solution__list}>
        {Silutioninfo.map((item, index) => (
          <li key={index} className={s.solution__list___item}>
            <h3 className={s.solution__list___item___heading}>{item.title}</h3>
            <p className={s.solution__list___item___text}>{item.description}</p>
          </li>
        ))}
      </ul>
      <ul className={s.solution__photoList}>
        <li className={s.solution__photoList___item}>
          <div className={s.solution__photoList___item___photoDiscover}></div>
        </li>
        <li className={s.solution__photoList___item}>
          <div className={s.solution__photoList___item___photoAboutUs}></div>
        </li>
        <li className={s.solution__photoList___item}>
          <div className={s.solution__photoList___item___photoTrevel}></div>
        </li>
      </ul>
    </section>
  );
};
export default SolutionSection;
