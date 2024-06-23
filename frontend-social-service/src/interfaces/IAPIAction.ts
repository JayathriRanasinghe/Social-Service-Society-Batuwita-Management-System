export interface IReturnAction<T> {
  type: string;
  payload: {
    data: Array<T> | object;
    isLoading: true;
  };
}

export interface IAPIAction {
  [key: string]: {
    [x: string]: any;
    get?: <T>(data: Array<T> | object) => IReturnAction<T>;
  };
}
