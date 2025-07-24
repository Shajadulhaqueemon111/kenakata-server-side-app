import { USER_ROLE } from './user.consttant';

export interface IUser {
  name: string;
  profileImage: string;
  status?: 'active' | 'block';
  email: string;
  password: string;
  role: 'user' | 'admin';
  isDeleted: boolean;
}
export type TUserRole = keyof typeof USER_ROLE;
