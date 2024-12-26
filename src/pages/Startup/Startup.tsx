import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, useIonRouter } from "@ionic/react";
import { FormEvent, useState } from "react";
import { CityService } from "../../services/CityService";

export function StartupPage(){
    const [cityName, setCityName] = useState("")
    const router = useIonRouter();
    const cityService = new CityService();

    const addCity = async () => {
        await cityService.appendCity(cityName);
        router.push('/folder/Index')
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
            
                <IonButton onClick={addCity}> Add City </IonButton>
            </IonContent>

        </IonPage>
    )    
}