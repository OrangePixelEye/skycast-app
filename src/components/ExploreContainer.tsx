import './ExploreContainer.css';
import CurrentWeatherContainer from './CurrentWeather/CurrrentWeatherContainer';
import ForecastWeather from './Forecast/ForecastContainer';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      <strong>{name}</strong>
      <CurrentWeatherContainer />
      <ForecastWeather />
    </div>
  );
};

export default ExploreContainer;
