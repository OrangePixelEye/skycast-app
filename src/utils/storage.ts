// utils/storageUtil.js
import { Storage } from '@ionic/storage';

const storage = new Storage();
await storage.create();

export const setItem = async (key: string, value: any) => await storage.set(key, value);
export const getItem = async (key: string) => await storage.get(key);
export const removeItem = async (key: string) => await storage.remove(key);
