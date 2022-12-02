import {Garage} from './garage';

export interface Ticket {
  id?: number;
  price?: string;
  fromPlace?: string;
  toPlace?: string;
  startDate?: number;
  startHour?: string;
  garage?: Garage;
  quantity?: number;
}
