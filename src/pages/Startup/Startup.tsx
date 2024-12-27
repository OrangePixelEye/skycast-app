import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonTitle, useIonRouter } from "@ionic/react";
import { FormEvent, useState } from "react";
import { CityService } from "../../services/CityService";
import { CitySearchResponse } from "../../types/ApiResponse";

export function StartupPage(){
    const [cityName, setCityName] = useState("")
    const [cityResults, setCityResults] = useState<Array<CitySearchResponse>>([]);
    const router = useIonRouter();
    const cityService = new CityService();

    const addCity = async () => {
        const results = await cityService.searchCities(cityName)
        setCityResults(results)
        //await cityService.appendCity(cityName);
        //router.push('/folder/Index')
    }

    return (
        <IonPage>
            <IonHeader>
                <IonTitle>
                    Welcome
                </IonTitle>
            </IonHeader>
            <IonContent>
                <IonInput onInput={(e) => setCityName(e.target.value)} value={cityName} label="City" labelPlacement="floating" placeholder="Your city name"/>
                <IonList>
                   {cityResults.map((result, idx) => {
                    return(
                        <IonItem key={idx}>
                            {result.city}
                        </IonItem>
                    );
                   })} 
                </IonList>
                <IonButton onClick={addCity}> Add City </IonButton>
            </IonContent>

        </IonPage>
    )    
}