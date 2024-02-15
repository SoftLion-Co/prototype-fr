import React, { FC } from "react";
import classNames from "classnames";
import s from "@/components/BlurComponent.module.scss";

interface BlurProps {
  className?: string;
  width?: number;
  height?: number;
  
}

const BlurComponent: FC<BlurProps> = ({ className, width, height }) => {
  return (
    <div
      className={classNames(s.blur, className)}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className={s.blur_item1}></div>
      <div className={s.blur_item2}></div>
      <div className={s.blur_item3}></div>
    </div>
  );
};

export default BlurComponent;
