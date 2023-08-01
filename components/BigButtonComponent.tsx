import Link from 'next/link';
import ContactUsSection from '@/app/sections/home_page/ContactUsSection';
import s from './BigButtonComponent.module.scss';

const BigButtonComponent = () => {
  return (
    <div>
      <Link href={'/privacy-policy'}>
        <button className={s.big__button}>Book Consultation</button>
        </Link>
    </div>
  );
};

export default BigButtonComponent;
