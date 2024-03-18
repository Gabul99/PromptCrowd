import { atom } from 'recoil';
import { User } from '../model/User';

export const userAtom = atom<User | null>({
  key: '@userAtom',
  default: null,
});
