import {Class} from './class';

export interface Student {
  id?: number;
  name?: string;
  dayOfBirth?: string;
  gender?: string;
  idCard?: string;
  phone?: string;
  email?: string;
  address?: string;
  customerType?: Class;
}
