import { mockUsers } from './mockData';
import { User } from '../types';

export const fetchUsers = async (count: number = 10): Promise<User[]> => {
  return Promise.resolve(mockUsers.slice(0, count));
};
