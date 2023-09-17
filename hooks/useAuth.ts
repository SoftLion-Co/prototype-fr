import { useLocalStorage } from "@mantine/hooks";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export const useAuth = () => {
  const [token] = useLocalStorage<string | null>({
    key: "admin-token",
  });
  console.log(token);

  useEffect(() => {
    if (!token) {
      redirect("/login");
    }
  }, [token]);
};
