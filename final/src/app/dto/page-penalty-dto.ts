import {Penalty} from '../model/penalty';

export interface PagePenaltyDto {
  content: Penalty[];
  pageable: {
    sort: {
      empty: boolean,
      sorted: boolean,
      unsorted: true
    },
    offset: number,
    pageNumber: number,
    pageSize: number,
    paged: true,
    unpaged: boolean
  };
  totalPages: number;
  last: boolean;
  totalElements: number;
  size: number;
  number: number;
  sort: {
    empty: true,
    sorted: boolean,
    unsorted: true
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
