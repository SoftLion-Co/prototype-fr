import Link from 'next/link'
import s from "./not-found.module.scss"
import logo_monochrome from "./../images/Logo Monochrome.svg"
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className={s.error}>
      <h2>404</h2>
      <Image src={logo_monochrome} alt="SoftLion"/>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}