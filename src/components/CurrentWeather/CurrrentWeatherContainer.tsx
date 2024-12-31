import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import "./CurrentWeatherContainer.css";

interface CurrentWeatherProps {
  currentTemperature: number;
  maxTemperature: number;
  minTemperature: number;
  temperatureUnit: string;
}

function CurrentWeatherContainer({
  currentTemperature,
  maxTemperature,
  minTemperature,
  temperatureUnit,
}: CurrentWeatherProps) {
  return (
    <IonCard className="parent">
      <div className="content">
        <IonCardHeader>
          <IonCardTitle>
            {currentTemperature}°{temperatureUnit}
          </IonCardTitle>
          <IonCardSubtitle>
            {maxTemperature} / {minTemperature}°
          </IonCardSubtitle>
        </IonCardHeader>
      </div>
      <img
        alt="todo"
        className="square-image"
        src="https://ionicframework.com/docs/img/demos/card-media.png"
      />
    </IonCard>
  );
}
export default CurrentWeatherContainer;
