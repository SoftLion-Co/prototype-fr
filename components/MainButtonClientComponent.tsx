"use client"
import MainButtonComponent from "@/components/MainButtonComponent";
import Link from "next/link";

const Section = () => {
  return (
    <>
      <MainButtonComponent loading={false} onClick={() => console.log("dsfdsfsdf")}>
        ACCEPT
      </MainButtonComponent>
    </>
  );
};

export default Section;