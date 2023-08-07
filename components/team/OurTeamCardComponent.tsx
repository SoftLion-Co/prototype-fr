import Image from "next/image";
import s from "./OurTeamCardComponent.module.scss";
import { FC } from "react";
import classNames from "classnames";
import { FiLinkedin } from "react-icons/fi";

interface TeamsProps {
  data: {
    name: string;
    position: string;
    avatar: string;
    id: string;
    linkedinUrl: string;
  };
  isActive?: boolean;
}

const OurTeamCard: FC<TeamsProps> = ({ data, isActive = true }) => {
  const memberClassName = isActive ? classNames(s.member, s.active) : s.member;

  return (
    <div className={memberClassName}>
      <div className={s.member__avatar}>
        <Image className={s.member_avatar_img} width={800} height={600} src={data.avatar} alt={data.name + data.id} />
      </div>
      <div className={s.member__information}>
        <p className={s.member__name}>{data.name}</p>
        {isActive && (
          <>
            <p className={s.member__position}>{data.position}</p>
            <a className={s.member__linkedin} href={data.linkedinUrl}>
              <FiLinkedin className={s.linkedin__icon} />
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default OurTeamCard;
