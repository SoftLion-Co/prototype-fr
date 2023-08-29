import { redirect } from "next/navigation";

const Authors = async () => {
  redirect("/authors/Author1");
  return <></>;
};

export default Authors;
