import Image from "next/image";
import s from "./OurTeamCardComponent.module.scss";
import { FC } from "react";
import classNames from "classnames";

interface TeamsProps {
 data: {
    name: string;
    position: string;
    avatar: string;
    id: string;
  }
  isActive?: boolean;
}

const OurTeamCard: FC<TeamsProps> = ({data, isActive}) => {
  const memberClassName = isActive ? classNames(s.member, s.active) : s.member;

  return (
    <div className={memberClassName}>
      <div className={s.member_avatar}>
        <Image className={s.member_avatar_img} width={800} height={600} src={data.avatar} alt={data.name + data.id} />
      </div>
      <div className={s.member_information}>
        <p className={s.member_name}>{data.name}</p>
        <p className={s.member_position}>{data.position}</p>
      </div>
    </div>
  );
};

export default OurTeamCard;
