"use client";
import classNames from "classnames";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
// import Link from "next/link";
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

  const links = [
    { title: "Personal-space", href: "/#" },
    { title: "Settings", href: "/#" },
  ];

  return (
    <>
      <div className={s.infoNavigat}>
        <InfoNavigationComponent links={links} />
      </div>
      <section className={s.settings}>
        <h2 className={s.settingsHeader}>Settings</h2>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <section className={s.formSection}>
            <h3>Personal Information</h3>
            <div className={s.formInput}>
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
            </div>
          </section>

          <section className={s.formSection}>
            <h3>Contacts</h3>
            <div className={s.formInput}>
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
            </div>
          </section>

          <section className={classNames(s.formSection, s.security)}>
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
          <div className={s.formBtn}>
            <button type="submit">Save changes</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default SettingsSection;
