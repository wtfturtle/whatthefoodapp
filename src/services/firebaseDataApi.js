import { db } from './firebase';
export const users = () => db.ref('users');