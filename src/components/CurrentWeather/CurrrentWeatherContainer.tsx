import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './CurrentWeatherContainer.css';

function CurrentWeatherContainer() {
  const currentTemperature = 30;
  const temperatureUnit = 'C';
  const maxTemperature = 32;
  const minTemperature = 20;

  return (
    <IonCard className='parent'>
      <div className='content'>
        <IonCardHeader>
            <IonCardTitle>{currentTemperature}°{temperatureUnit}</IonCardTitle>
            <IonCardSubtitle>{maxTemperature} / {minTemperature}°</IonCardSubtitle>
        </IonCardHeader>
      </div>
        <img alt="todo"
        className='square-image'
          src='https://ionicframework.com/docs/img/demos/card-media.png'/>
    </IonCard>
  );
}
export default CurrentWeatherContainer;