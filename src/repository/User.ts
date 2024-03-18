import { getDBData, setDBData } from '../firebase/firebase';
import { User } from '../model//User';

export const getUsers = async () => {
  const data = await getDBData();
  return data?.users ?? undefined;
};

export const login = async (name: string) => {
  const users = await getUsers();
  const target = users?.filter((user: any) => user.name === name)[0] ?? undefined;
  return target;
};

export const addUser = async (user: User) => {
  const users = await getUsers();
  if (users === undefined) {
    await setDBData('users', [user]);
  } else {
    await setDBData('users', [...users, user]);
  }
};
