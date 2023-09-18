"use client";
import s from "./page.module.scss";
import { redirect } from "next/navigation";

const Technologies = async () => {
  redirect("/technologies/java");
  return <></>;
};

export default Technologies;
