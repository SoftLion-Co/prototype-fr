export interface ClientData {
  id: string;
  name: string;
  tell: string;
  email: string;
  password: string;
  projectsCount: number;
  registerDate: Date;
  wasOnline: Date;
}

export interface ContactData {
  id: string;
  tell: string;
  email: string;
  description: string;
  sendData: Date;
}
