"use client";
import classNames from "classnames";
import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import s from "./SettingsSection.module.scss";
import CustomerService from "./../../../services/customer-service";
// import AuthService from "./../../../services/auth-service";

type SettingsFormData = {
  personalName: string;
  personalSurname: string;
  contactEmail: string;
  contactPhone: string;
  newPassword: string;
  oldPassword: string;
  repeatNewPassword: string;
};

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const SettingsSection: FC = () => {
  // Стан для даних користувача
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  // Стан для редагованих даних користувача
  const [editedUserData, setEditedUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  // Стан для даних коду підтвердження
  const [confirmationCode, setConfirmationCode] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        // Отримання даних користувачів
        const customersData = await CustomerService.getAllCustomers();
        setUserData(customersData.result[0]);

        // Отримання даних користувача аутентифікації
        // const codeData = await AuthService.sendCode(
        //   customersData.result[0].email
        // );
        // console.log("Код підтвердження:", codeData);
      } catch (error) {
        console.error("Помилка при отриманні даних:", error);
      }
    }

    fetchData();
  }, []);
  console.log(userData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsFormData>();

  const onSubmit = (data: SettingsFormData) => {
    console.log(data);
  };

  return (
    <section className={s.settings}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <section className={s.formSection}>
          <h3>Personal Information</h3>
          <div className={s.formInput}>
            <div className={s.formRow}>
              <label>Change name</label>
              <input
                placeholder="Name"
                type="text"
                value={userData.firstName}
                {...register("personalName")}
              />
            </div>
            <div className={s.formRow}>
              <label>Change surname</label>
              <input
                placeholder="Surname"
                type="text"
                value={userData.lastName}
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
                value={userData.email}
                {...register("contactEmail")}
              />
            </div>
            <div className={s.formRow}>
              <label>Change phone</label>
              <input
                placeholder="Phone"
                type="tel"
                value={userData.phoneNumber}
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
            {/* <input
                placeholder="Old password"
                type="password"
                {...register("oldPassword")}
              /> */}
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
  );
};

export default SettingsSection;
