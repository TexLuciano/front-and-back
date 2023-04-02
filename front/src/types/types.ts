export  interface DataType {
  data: {
    admin: boolean;
    email: string;
    id: string;
    name: string;
    token: string;
  };
}

export type InputsTypes = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export type UserType={
  admin: boolean;
  email: string;
  id: string;
  name: string;
  token: string;
}
