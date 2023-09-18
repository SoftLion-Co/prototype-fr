"use client";
import classNames from "classnames";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import s from "./Personal.module.scss";

const Personal = () => {
  const links = [{ title: "Personal-space-Project", href: "/#" }];

  return (
    <section className={s.settings}>
      <InfoNavigationComponent links={links} />
      <h2>Project</h2>
      <div className={classNames(s.container, s.settings)}>
        <div>
          <Link href="/settings-progect" title="Project" replace></Link>
          {/* <div>
            <h2>Project</h2>
            <h2>Company Move</h2>
            <h2>Project Name</h2>
            <h2>Project Name</h2>
          </div>
          <div>
            <h2>Settings</h2>
            <h2>Privat Information</h2>
          </div> */}
        </div>
        <div className={s.settingsForm}></div>
      </div>
    </section>
  );
};

export default Personal;
