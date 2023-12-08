import { useQuery, QueryKey } from "react-query";
import CustomerService from "../services/customer-service";

export interface OrderProjectDataResponse {
  result: Result;
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
  id: string;
  createdDateTime: string;
  updatedDateTime: any;
}

export interface PeriodProgress {
  service: Service;
  numberWeek: number;
  progress: number;
  orderProjectStatusId: string;
  id: string;
  createdDateTime: string;
  updatedDateTime: any;
}

export interface Service {
  title: string;
  description: string;
  id: string;
  createdDateTime: string;
}

export interface SettingsData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  createdDateTime: string;
}

export function useOrderProjectData() {
  const queryKey: QueryKey = "orderProjectStatus";

  const { data, ...rest } = useQuery<OrderProjectDataResponse>(
    queryKey,
    CustomerService.getCustomer
  );

  const sidebarMenuData = data
    ? data.result.orderProjectStatuses
        .map((item) => ({
          id: item.id,
          title: item.title,
          projectStatus: item.projectStatus,
          createdDateTime: item.createdDateTime,
        }))
        .sort((a, b) => {
          const dateA = new Date(a.createdDateTime);
          const dateB = new Date(b.createdDateTime);
          return dateA.getTime() - dateB.getTime();
        })
    : [];

  const orderProjecData = data ? data.result.orderProjectStatuses : [];

  const settingsData: SettingsData | undefined = data
    ? {
        id: data.result.id,
        firstName: data.result.firstName,
        lastName: data.result.lastName,
        email: data.result.email,
        phoneNumber: data.result.phoneNumber,
        createdDateTime: data.result.createdDateTime,
      }
    : undefined;

  return { data, sidebarMenuData, settingsData, orderProjecData, ...rest };
}
