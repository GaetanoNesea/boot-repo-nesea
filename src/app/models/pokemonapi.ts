
export interface IResults {
  name: string;
  url: string;
}

export interface IPokeapi {
  count: number;
  next: string;
  previous?: any;
  results: IResults[];
}
