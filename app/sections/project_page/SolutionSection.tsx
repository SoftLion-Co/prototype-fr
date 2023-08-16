import s from "./SolutionSection.module.scss";
import HeadingOurProjectComponent from "../../../components/project/HeadingOurProjectComponent";
import Image from "next/image";

interface DesignInfoItem {
  title: string;
  description: string;
  imageSrc: string;
  class: string;
  photo: string;
}

const silutionInfo: DesignInfoItem[] = [
  {
    photo: "Discover",
    title: "",
    description:
      "Upon receiving your request, we proceed to review and analyze all the details. Our experts study your requirements and expectations, conducting additional research if necessary, to ensure successful project implementation.",
    imageSrc: "https://i.ibb.co/Pz2QWmc/main-page-2.png",
    class: "photo_discover",
  },
  {
    photo: "About Us",
    title: "Analytics and Tracking",
    description:
      "Integrated robust analytics and tracking tools, such as Google Analytics, to collect valuable data on website visits, user behavior, and conversions. Utilized this data to gain insights into user preferences, measure the effectiveness of marketing strategies, and make data-driven decisions for further improvements.",
    imageSrc: "https://i.ibb.co/bHFC4n7/image-21.png",
    class: "photo_about",
  },
  {
    photo: "Trevel",
    title: "Fast Page Loading",
    description:
      "Implemented various optimization techniques to enhance page loading speed and performance. This included optimizing image sizes, minimizing file sizes, leveraging caching mechanisms, and utilizing content delivery networks (CDNs) to deliver content efficiently. As a result, visitors experience fast and responsive page loading, ensuring a positive user experience.",
    imageSrc: "https://i.ibb.co/19t1wHh/image-2.png",
    class: "photo_trevel",
  },
  {
    photo: "",
    title: "Support and After-Sales Service",
    description:
      "Established a reliable support system to address customer inquiries, concerns, and provide assistance throughout the customer journey. Implemented live chat support, email ticketing systems, and a dedicated customer support team to ensure prompt and efficient resolution of customer issues, fostering reliable cooperation and customer satisfaction. ",
    imageSrc: "",
    class: "",
  },
];

const SolutionSection = () => {
  return (
    <section className={s.solution}>
      <div className={s.solution__heading}>
        <HeadingOurProjectComponent title="02" text="Solution" />
      </div>
      <div className={s.solution__lists}>
        <ul className={`${s.solution__list} ${s.container}`}>
          {silutionInfo.map((info, index) => (
            <li key={index} className={s.solution__item}>
              {info.title && info.title !== "/" && (
                <h3
                  className={`${s.solution__heading_text} ${
                    s[`solution__heading_${index + 1}`]
                  }`}
                >
                  {info.title}
                </h3>
              )}
              <p
                className={`${s.solution__text} ${
                  s[`solution__description_${index + 1}`]
                }`}
              >
                {info.description}
              </p>
            </li>
          ))}
        </ul>
        <ul className={`${s.solution__photos} ${s.container}`}>
          {silutionInfo
            .filter((info) => info.imageSrc && info.imageSrc !== "/")
            .map((info) => (
              <li className={s[`solution__${info.class}`]}>
                <Image
                  src={info.imageSrc}
                  className={s.solution__image}
                  alt={info.photo}
                  layout="fill"
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
export default SolutionSection;
