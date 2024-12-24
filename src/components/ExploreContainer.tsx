import './ExploreContainer.css';
import CurrentWeatherContainer from './CurrentWeather/CurrrentWeatherContainer';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      <strong>{name}</strong>
      <CurrentWeatherContainer/ >
    </div>
  );
};

export default ExploreContainer;
