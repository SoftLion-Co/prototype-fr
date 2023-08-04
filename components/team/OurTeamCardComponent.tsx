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
      <div className={s.member_avatar}>
        <Image className={s.member_avatar_img} width={800} height={600} src={data.avatar} alt={data.name + data.id} />
      </div>
      <div className={s.member_information}>
        <p className={s.member_name}>{data.name}</p>
        {isActive && (
          <>
            <p className={s.member_position}>{data.position}</p>
            <a className={s.member_linkedin} href={data.linkedinUrl}>
              <FiLinkedin className={s.linkedin_icon} />
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default OurTeamCard;
