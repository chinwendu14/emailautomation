// import { UserCreate } from "./auth.interface";
// import { IFile } from "./file.interface";

export interface UserUpdate {
  firstName?: string;
  lastName?: string;
  fullName: string;
  middleName?: string;
}

// export interface UserCreate extends UserUpdate {
//   phoneNumber?: string;
//   email?: string;
//   role: string;
//   password: string;
//   confirmPassword: string;
//   countryDialCode?: string;
//   country?: string;
//   refferalCode?: string;
//   shortCountryCode?: string;
// }

export interface User {
  id: string;
  name: string;
  email: string;
  accessToken: string;
}
export interface DeleteAccountInput {
  email: string;
  password: string;
  reason: string;
}
export interface UserActivity {
  _id: string;
  activity: string;
  tags: string;
  module: string;
  moduleId: string;
  location: string;
  // user: User;
  createdAt: string;
  updatedAt: string;
}
