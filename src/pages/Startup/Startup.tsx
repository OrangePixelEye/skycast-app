import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  useIonRouter,
} from "@ionic/react";
import { FormEvent, useState } from "react";
import { CityService } from "../../services/CityService";
import { CitySearchResponse } from "../../types/ApiResponse";

export function StartupPage() {
  const [cityName, setCityName] = useState("");
  const [selectedIdx, setSelectedIdx] = useState<number>(-1);
  const [cityResults, setCityResults] = useState<Array<CitySearchResponse>>([]);
  const router = useIonRouter();
  const cityService = new CityService();

  const searchCity = async () => {
    const results = (await cityService.searchCities(cityName)) as any;
    // fix: backend return
    const temp = results.data;
    setCityResults(temp);
    setSelectedIdx(-1);
  };

  const addCity = async () => {
    const selectedCity = cityResults[selectedIdx];
    const { local_names, ...selectedCityFormatted } = selectedCity;
    await cityService.appendCity({
      ...selectedCityFormatted,
    });

    router.push(`/city/${selectedCityFormatted.name}`);
  };

  const selectCity = (idx: number) => {
    setSelectedIdx(idx);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonTitle>Welcome</IonTitle>
      </IonHeader>
      <IonContent>
        <IonInput
          onInput={(e) => setCityName(e.target.value)}
          value={cityName}
          label="City"
          labelPlacement="floating"
          placeholder="Your city name"
        >
          <IonButton slot="end" onClick={searchCity}>
            {" "}
            Search{" "}
          </IonButton>
        </IonInput>
        <IonList>
          {cityResults.map((result, idx) => {
            return (
              <IonItem
                key={idx}
                onClick={() => selectCity(idx)}
                className={idx === selectedIdx ? "selected" : "not-selected"}
              >
                {result.name}  - {result.state} - {result.country}
              </IonItem>
            );
          })}
        </IonList>
        <IonButton onClick={addCity}> Add City </IonButton>
      </IonContent>
    </IonPage>
  );
}
