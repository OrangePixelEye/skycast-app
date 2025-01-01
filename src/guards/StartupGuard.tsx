import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { CityService } from "../services/CityService";

export function StartupGuard() {
    const [areCitiesAvailable, setAreCitiesAvailable] = 
        useState<null| boolean>(null);
    const [currentCity, setCurrentCity] = useState("");
    
    const cityService = new CityService();
    
    useEffect(()=> {
        const verifyCities = async() => {
            const cities = await cityService.getCities(); 
            if(cities != null) {
                setCurrentCity(cities[0].name);
            }
            setAreCitiesAvailable(cities != null);
            
        }
        verifyCities();
    }, []) ;
    
    if(areCitiesAvailable == null){
        return <div>Loading...</div>
    }
    
    return areCitiesAvailable ? (
        <Redirect to={'/city/' + currentCity}/>
    ) : (
        <Redirect to='/startup' />
    )
}
