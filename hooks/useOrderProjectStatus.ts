import { useQuery, QueryKey } from "react-query";
import CustomerService from "./../services/customer-service";

export interface OrderProjectDataResponse {
  result: Result[];
  statusCode: number;
  errors: any;
}

export interface Result {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  orderProjectStatuses: OrderProjectStatuse[];
  id: string;
  createdDateTime: string;
  updatedDateTime: any;
}

export interface OrderProjectStatuse {
  periodProgresses: PeriodProgress[];
  customerId: string;
  title: string;
  projectStatus: number;
  design: boolean;
  development: boolean;
  security: boolean;
  id: string;
  createdDateTime: string;
  updatedDateTime: any;
}

export interface PeriodProgress {
  orderProjectStatusId: string;
  numberWeek: number;
  design: number;
  development: number;
  security: number;
  id: string;
  createdDateTime: string;
  updatedDateTime: any;
}

export function useOrderProjectStatus() {
  const queryKey: QueryKey = "orderProjectStatus";
  const { data, ...rest } = useQuery<OrderProjectDataResponse>(
    queryKey,
    CustomerService.getAllCustomers
  );

  const sidebarMenuData = data
    ? data.result[0].orderProjectStatuses.map((item) => ({
        id: item.id,
        title: item.title,
        projectStatus: item.projectStatus,
      }))
    : [];

  const orderProjecData = data ? data.result[0].orderProjectStatuses : [];

  return { data, sidebarMenuData, orderProjecData, ...rest };
}
