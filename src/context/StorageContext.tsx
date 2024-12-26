import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { Storage } from "@ionic/storage";

interface StorageContextType {
    setItem: (key: string, value: any) => Promise<any>;
    getItem: (key: string) => Promise<any>;
    removeItem: (key: string) => void;
}

const StorageContext = createContext<undefined | StorageContextType>(undefined);

export const StorageProvider = ({children} : { children : ReactNode}) => {
    const [storage] = useState(new Storage());
    useEffect(() => {
        storage.create()
    },[storage]);
    
    const setItem = async (key: string, value: any) => {
        return storage.set(key, value)
    }

    const getItem = async (key: string) => {
        return storage.get(key)
    }

    const removeItem = (key: string) => {
        storage.remove(key)
    }

    return (
        <StorageContext.Provider value={{
            setItem,
            getItem,
            removeItem
        }}>
            {children}
        </StorageContext.Provider>
    )
}

export function useStorageContext() {
    const context = useContext(StorageContext);
    if(!context) {
        throw new Error("Can't use storage");
    }
    return context;
}