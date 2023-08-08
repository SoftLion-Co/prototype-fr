// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import s from "./FormComponent.module.scss";
// import "react-phone-input-2/lib/style.css";
// import PhoneInput from "react-phone-input-2";
// import axios from "axios";

// interface FormData {
//   email: string;
//   phone: string;
//   description: string;
// }

// const FormComponent = () => {
//   const [phone, setPhone] = useState("");
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//     reset,
//   } = useForm<FormData>();

//   const handleFormSubmit = async (data: FormData) => {
//     try {
//       console.log("email:", data.email);
//       console.log("phone:", phone);
//       console.log("description:", data.description);

//       const formData = {
//         email: data.email,
//         phone: phone,
//         description: data.description,
//       };

//       // Replace "https://example.com/api/submit" with your actual backend endpoint
//       const response = await axios.post(
//         "https://example.com/api/submit",
//         formData
//       );

//       console.log("Форма успішно надіслана:", response.data);

//       setIsFormSubmitted(true);
//       reset();
//       setPhone("");
//     } catch (error) {
//       console.error("Помилка надсилання форми:", error);
//     }
//   };

//   return (
//     <form className={s.form} onSubmit={handleSubmit(handleFormSubmit)}>
//       <h2 className={s.form__title}>Book consultation</h2>
//       <span className={s.form__line}></span>
//       <div className={s.form__container}>
//         <div className={s.form__input}>
//           <input
//             type="email"
//             className={s.form__field}
//             placeholder=" "
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                 message: "Please enter a valid email address",
//               },
//             })}
//           />
//           <label className={s.form__label} htmlFor="email">
//             E-mail
//           </label>
//           {errors.email && <p className={s.error}>{errors.email.message}</p>}
//         </div>
//         <div className={s.form__input}>
//           <PhoneInput
//             inputProps={{
//               required: true,
//               name: "phone",
//               className: s.form__field,
//               placeholder: " ",
//             }}
//             country={"us"}
//             value={phone}
//             onChange={(phone: string) => setPhone(phone)}
//           />
//           {errors.phone && <p className={s.error}>{errors.phone.message}</p>}
//         </div>
//         <div className={s.form__input}>
//           <input
//             type="text"
//             className={s.form__field}
//             placeholder=" "
//             {...register("description", {
//               required: "Description is required",
//             })}
//           />
//           <label className={s.form__label} htmlFor="description">
//             Short describe ur idea
//           </label>
//           {errors.description && (
//             <p className={s.error}>{errors.description.message}</p>
//           )}
//         </div>
//       </div>
//       <button type="submit" className={s.form__button}>
//         Book Consultation
//       </button>
//       <p className={s.form__text}>
//         By clicking on this button I agree to the{" "}
//         <span className={s.pr}>processing of personal data</span>
//       </p>
//     </form>
//   );
// };

// export default FormComponent;


import React from "react";
import { useForm } from "react-hook-form";
import s from "./FormComponent.module.scss";
import axios from "axios";

interface FormData {
  email: string;
  phone: string;
  description: string;
}

const FormComponent = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const handleFormSubmit = async (data: FormData) => {
    try {
      console.log("email:", data.email);
      console.log("phone:", data.phone);
      console.log("description:", data.description);

      const formData = {
        email: data.email,
        phone: data.phone,
        description: data.description,
      };

      // Replace "https://example.com/api/submit" with your actual backend endpoint
      const response = await axios.post(
        "https://example.com/api/submit",
        formData
      );

      console.log("Форма успішно надіслана:", response.data);

      reset();
    } catch (error) {
      console.error("Помилка надсилання форми:", error);
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(handleFormSubmit)}>
      <h2 className={s.form__title}>Book consultation</h2>
      <span className={s.form__line}></span>
      <div className={s.form__container}>
        <div className={s.form__input}>
          <input
            type="email"
            className={s.form__field}
            placeholder=" "
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
          />
          <label className={s.form__label} htmlFor="email">
            E-mail
          </label>
          {errors.email && <p className={s.error}>{errors.email.message}</p>}
        </div>
        <div className={s.form__input}>
          <input
            type="tel"
            className={s.form__field}
            placeholder=" "
            {...register("phone", {
              required: "Phone number is required",
            })}
          />
          <label className={s.form__label} htmlFor="description">
            Phone
          </label>
          {errors.phone && <p className={s.error}>{errors.phone.message}</p>}
        </div>
        <div className={s.form__input}>
          <input
            type="text"
            className={s.form__field}
            placeholder=" "
            {...register("description", {
              required: "Description is required",
            })}
          />
          <label className={s.form__label} htmlFor="description">
            Short describe ur idea
          </label>
          {errors.description && (
            <p className={s.error}>{errors.description.message}</p>
          )}
        </div>
      </div>
      <button type="submit" className={s.form__button}>
        Book Consultation
      </button>
      <p className={s.form__text}>
        By clicking on this button I agree to the{" "}
        <span className={s.pr}>processing of personal data</span>
      </p>
    </form>
  );
};

export default FormComponent;
