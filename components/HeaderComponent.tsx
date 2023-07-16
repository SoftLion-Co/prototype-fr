import Link from "next/link";
import s from "./HeaderComponent.module.scss";
import { IoIosMenu } from 'react-icons/io';

import Logo from "images/logo.svg";
import Image from "next/image";


const HeaderComponent = () => {
  return (
    <header className={s.container}>
      <div className={s.header}>
        {/* <div className={s.header__logo}></div> */}
        <Image
                className={s.header__logo}
                src={Logo}
               
              />
        {/* <img src="images/logo.svg" alt="logo" className={s.header__logo} /> */}
        <nav  className={s.header__navigation}>
          <Link href="/Servise" className={s.header__link}>
            Servise
          </Link>
          <Link href="/OurProjects" className={s.header__link}>
            Our Projects
          </Link>
          <Link href="/Technologies" className={s.header__link}>
            Technologies
          </Link>
          <Link href="/Blog" className={s.header__link}>
            Blog
          </Link>
          <Link href="/ContuctUs" className={s.header__link}>
            Contact Us
          </Link>
        </nav>
        
        <button className={s.header__btnBurger}>
        <IoIosMenu className={s.header__burger}  width= "18px"  height= "13px"
     / >
        </button>
        <button className={s.header__btnHeader}>
        <p className={s.header__btnText}>Login</p>
        </button>
       
      </div>
      <hr className={s.header__line} ></hr>
    </header>
  );
};

export default HeaderComponent;
