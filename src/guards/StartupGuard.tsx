import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router";
import { CityService } from "../services/CityService";

export function StartupGuard() {
    const [areCitiesAvailable, setAreCitiesAvailable] = useState<null| boolean>(null);
    const cityService = new CityService();
    useEffect(()=> {
        const verifyCities = async() => {
            // TODO: implement a better managment
            const cities = await cityService.getCities(); 
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