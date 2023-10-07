import Image, { StaticImageData } from "next/image";
import s from "./OurTeamCardComponent.module.scss";
import { FC } from "react";
import classNames from "classnames";
import { FiLinkedin } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface TeamsProps {
  data: {
    id: number;
    name: string;
    position: string;
    avatar: string;
    generalInfo: string;
    linkedinUrl: string;
  };
  isActive?: boolean;
}

const OurTeamCard: FC<TeamsProps> = ({ data, isActive = true }) => {
  const pathname = usePathname();
  const isOnHomePage = pathname === "/";

  const memberClassName = isActive ? classNames(s.member, s.active) : s.member;
  console.log(data.name);
  return (
    <div className={memberClassName}>
      <div className={s.member__avatar}>
        <Link href={`/authors/${data.name}`}>
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
        <p className={s.member__name}>{data.name}</p>
        {isActive || isOnHomePage ? (
          <>
            <p className={s.member__position}>{data.position}</p>
            <a
              className={s.member__linkedin}
              href={data.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className={s.linkedin__icon} />
            </a>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default OurTeamCard;
