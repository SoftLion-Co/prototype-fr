"use client"
import React from 'react';
import { Anchor } from '@mantine/core';
import s from "./InfoNavigationComponent.module.scss";
import { BsHouseDoor } from 'react-icons/bs';
import classNames from 'classnames';

interface InfoNavigationComponentProps {
  links: { title: string; href: string }[];
}

const InfoNavigationComponent = ({ links }: InfoNavigationComponentProps) => {
  const allLinks = [
    { title: <BsHouseDoor className={s.custom_breadcrumbs__home}/>, href: "/" },
    ...links,
  ];

  const items = allLinks.map((item, index) => (
    <Anchor
      href={item.href}
      key={index}
      className={index === allLinks.length - 1 ? `${s.custom_breadcrumbs__link} ${s.custom_breadcrumbs__active}` : s.custom_breadcrumbs__link}
    >
      {item.title}
    </Anchor>
  ));

  return (
    <div className={classNames(s.container, s.custom_breadcrumbs)}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className={s.custom_breadcrumbs__separator}>—</span>
          )}
          {item}
        </React.Fragment>
      ))}
    </div>
  );
};

export default InfoNavigationComponent;
