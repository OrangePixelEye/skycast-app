import { useEffect, useState } from "react";
import { getItem } from "../utils/storage";
import { Redirect, Route } from "react-router";

export function StartupGuard() {
    const [areCitiesAvailable, setAreCitiesAvailable] = useState<null| boolean>(null);
    useEffect(()=> {
        const verifyCities = async() => {
            // TODO: implement a better managment
            const cities = await getItem("cities");
            setAreCitiesAvailable(cities != null)
        }
        verifyCities();
    }, []) ;
    if(areCitiesAvailable == null){
        return <div>Loading...</div>
    }
    return areCitiesAvailable ? (
        <Route path='/folder/index'/>
    ) : (
        <Redirect to='/startup' />
    )
}