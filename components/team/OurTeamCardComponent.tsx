import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import s from "./OurTeamCardComponent.module.scss";
import { FC } from "react";
import classNames from "classnames";
import { FiLinkedin } from "react-icons/fi";
import { usePathname } from "next/navigation";

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
    <div className={memberClassName}>
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
            width={800}
            height={600}
            src={data.avatar}
            alt={data.name + data.id}
          />
        </Link>
      </div>
      <div className={s.member__information}>
        <h4 className={s.member__name}>{data.name}</h4>
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
              <FiLinkedin className={s.linkedin__icon} />
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default OurTeamCard;
