import { FC } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import s from "./OurTeamCardComponent.module.scss";
import classNames from "classnames";
import Linkedin from "@/images/social-lincs/icon-linkedin.svg";
import { usePathname } from "next/navigation";
import MotionWrapper from "@/hooks/MotionWrapper";

interface TeamsProps {
  data: {
    name: string;
    position: string;
    avatar: string | StaticImageData;
    id: string;
    linkedinUrl: string;
  };
  isActive?: boolean;
}

const OurTeamCard: FC<TeamsProps> = ({ data, isActive = true }) => {
  const pathname = usePathname();
  const isOnHomePage = pathname === "/";

  const memberClassName = isActive ? classNames(s.member, s.active) : s.member;

  return (
    <MotionWrapper
      tag="div"
      initial
      viewport
      variants
      custom={1.5}
      className={memberClassName}
    >
      <div className={s.member__avatar}>
        <Link
          href={
            data.linkedinUrl === ""
              ? "https://www.linkedin.com/company/softlion"
              : data.linkedinUrl
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={s.member_avatar_img}
            width={400}
            height={300}
            src={data.avatar}
            alt={data.name + data.id}
          />
        </Link>
      </div>
      <div className={s.member__information}>
        <h3 className={s.member__name}>{data.name}</h3>
        {isActive || isOnHomePage ? (
          <>
            <p className={s.member__position}>{data.position}</p>
            <Link
              className={s.member__linkedin}
              href={
                data.linkedinUrl === ""
                  ? "https://www.linkedin.com/company/softlion"
                  : data.linkedinUrl
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Linkedin}
                alt="Linkedin"
                className={s.linkedin__icon}
              />
            </Link>
          </>
        ) : null}
      </div>
    </MotionWrapper>
  );
};

export default OurTeamCard;
