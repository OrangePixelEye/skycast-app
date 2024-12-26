import { IonCard } from "@ionic/react";
import './ForecastContainer.css';

function ForecastWeather() {
    const forecastData = [
        {
            min: 25,
            max: 32,
            date: 'today'
        },
        {
            min: 12,
            max: 24,
            date: 'tomorrow'
        }
    ];
    const forecastCard = forecastData.map((day, idx) => {
        return(
            <section key={idx}>
                <img/>
                <h1>{day.max}/{day.min}</h1>
                <h2>{day.date}</h2>
            </section>
        )
    })
    
    return(
        <IonCard className="forecast">
            {forecastCard}        
        </IonCard>
    );
}

export default ForecastWeather;