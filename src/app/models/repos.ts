export interface IRepos {
  isFetching?: boolean;
  [key: string]: any;
}

export interface IReposAction {
  type: string;
  payload?: {
    [key: string]: any;
  };
}
