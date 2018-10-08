import { IRepos } from 'models/repos';
import { ICounter } from 'models/counter';
import { IStars } from 'models/stars';
import { IContact } from 'models/contact';

export interface IStore {
  counter: ICounter;
  stars: IStars;
  repos: IRepos;
  contact: IContact;
};
