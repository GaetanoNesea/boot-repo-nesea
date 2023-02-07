
export interface IResults {
  //[x: string]: any;
  name: string;
  url: string;
}

export interface IPokeapi {
  count: number;
  next: string;
  previous?: any;
  results: IResults[];
}
