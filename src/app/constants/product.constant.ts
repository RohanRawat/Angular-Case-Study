

export enum SORT_ORDER_TYPE {
  DEF = 'DEF',
  ASC = 'ASC',
  DES = 'DES',
}
export enum APP_ENUM_TYPE {
  CHANGE = 'CHANGE',
  UI_CHANGE = 'UI_CHANGE',
  RELEVANCE = 'RELEVANCE',
  LOW_TO_HIGH = 'LOW_TO_HIGH',
  HIGH_TO_LOW = 'HIGH_TO_LOW',
  GRID_VIEW = 'GRID_VIEW',
  LIST_VIEW = 'LIST_VIEW',
}

export const PRODUCT_FILTER = [
  { name: 'Relevance', value: APP_ENUM_TYPE.RELEVANCE },
  { name: 'Price -- Low to High', value: APP_ENUM_TYPE.LOW_TO_HIGH },
  { name: 'Price -- High to Low', value: APP_ENUM_TYPE.HIGH_TO_LOW },
];


