import Link from "next/link";
import s from "./BigButtonComponent.module.scss";

const BigButtonComponent = () => {
  return (
    <button className={s.big__button}>
      <Link href={"/contact-us"} className={s.link} >
        Book Consultation
      </Link>
    </button>
  );
};

export default BigButtonComponent;
