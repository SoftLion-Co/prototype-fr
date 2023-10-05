import React, { FC } from "react";
import s from "./blog/blog.module.scss";
import { AdminLayout } from "./AdminLayout";

const DashboardPage: FC = () => {
  return (
    <AdminLayout>
      <div>Dashboard</div>
    </AdminLayout>
  );
};

export default DashboardPage;
