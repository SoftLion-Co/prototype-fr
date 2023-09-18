"use client";
import classNames from "classnames";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import InfoNavigationComponent from "@/components/InfoNavigationComponent";
import s from "./SettingsSection.module.scss";

type SettingsFormData = {
  personalName: string;
  personalSurname: string;
  contactEmail: string;
  contactPhone: string;
  newPassword: string;
  oldPassword: string;
  repeatNewPassword: string;
};

const SettingsSection: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsFormData>();

  const onSubmit = (data: SettingsFormData) => {
    console.log(data);
  };

  const links = [{ title: "Personal-space-Settings", href: "/settings" }];

  return (
    <section className={s.settings}>
      <InfoNavigationComponent links={links} />
      <h2>Settings</h2>
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
        <form className={s.settingsForm} onSubmit={handleSubmit(onSubmit)}>
          <section className={s.formSection}>
            <h3>Personal Information</h3>
            <div className={s.formRow}>
              <label>Change name</label>
              <input
                placeholder="Name"
                type="text"
                {...register("personalName")}
              />
            </div>
            <div className={s.formRow}>
              <label>Change surname</label>
              <input
                placeholder="Surname"
                type="text"
                {...register("personalSurname")}
              />
            </div>
          </section>

          <section className={s.formSection}>
            <h3>Contacts</h3>
            <div className={s.formRow}>
              <label>Change email</label>
              <input
                placeholder="Email"
                type="email"
                {...register("contactEmail")}
              />
            </div>
            <div className={s.formRow}>
              <label>Change phone</label>
              <input
                placeholder="Phone"
                type="tel"
                {...register("contactPhone")}
              />
            </div>
          </section>

          <section className={s.formSection}>
            <h3>Security</h3>
            <div className={s.formRow}>
              <label>New password</label>
              <input
                placeholder="New password"
                type="password"
                {...register("newPassword")}
              />
              <input
                placeholder="Old password"
                type="password"
                {...register("oldPassword")}
              />
              <input
                placeholder="Reapet new password"
                type="password"
                {...register("repeatNewPassword")}
              />
            </div>
          </section>

          <button type="submit">Save changes</button>
        </form>
      </div>
    </section>
  );
};

export default SettingsSection;
