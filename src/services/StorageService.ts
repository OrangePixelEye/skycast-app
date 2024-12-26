import { Storage } from "@ionic/storage";

class StorageService{
    private storage: Storage
    
    constructor() {
        this.storage = new Storage();
        this.storage.create();
    }
    
    getItem(key: string) {
        return this.storage.get(key);
    }
    
    setItem(key: string, value: any){
        return this.storage.set(key, value);
    }
    
    removeItem(key: string) {
        return this.storage.remove(key);
    }
}

export const storageService = new StorageService();