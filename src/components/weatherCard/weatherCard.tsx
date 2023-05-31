import React, { useEffect, useState } from 'react';
import {
  getWeatherIconSrc,
  fetchOpenWeatherData,
  OpenWeatherData,
  OpenWeatherTempScale,
} from '../../utils/api';
import { Typography, Grid } from '@material-ui/core';
import WeatherCardContainer from '../weatherCardContainer/WeatherCardContainer';
import './WeatherCard.css';

type WeatherCardState = 'loading' | 'error' | 'ready';

const WeatherCard = ({
  city,
  tempScale,
  onDelete,
}: {
  city: string;
  tempScale: OpenWeatherTempScale;
  onDelete?: () => void;
}) => {
  const [weatherData, setWeatherData] = useState<OpenWeatherData | null>(null);
  const [cardState, setCardState] = useState<WeatherCardState>('loading');

  useEffect(() => {
    fetchOpenWeatherData(city, tempScale)
      .then((data) => {
        setWeatherData(data);
        setCardState('ready');
      })
      .catch((error) => {
        console.log(error);
        setCardState('error');
      });
  }, [city, tempScale]);

  if (cardState == 'loading' || cardState == 'error') {
    return (
      <WeatherCardContainer onDelete={onDelete}>
        <Typography className="weathercard-title">{city}</Typography>
        <Typography className="weathercard-body">
          {cardState == 'loading'
            ? 'Loading...'
            : 'Error: could not retreive weather data for this city.'}
        </Typography>
      </WeatherCardContainer>
    );
  }

  return (
    <WeatherCardContainer onDelete={onDelete}>
      <Grid container justifyContent="space-around">
        <Grid item>
          <Typography className="weatherCard-title">
            {weatherData.name}
          </Typography>
          <Typography className="weatherCard-temp">
            {Math.round(weatherData.main.temp)}
          </Typography>
          <Typography className="weatherCard-body">
            Feels like {Math.round(weatherData.main.feels_like)}
          </Typography>
        </Grid>
        <Grid item>
          {weatherData.weather.length > 0 && (
            <>
              <img src={getWeatherIconSrc(weatherData.weather[0].icon)} />
              <Typography className="weatherCard-body">
                {weatherData.weather[0].main}
              </Typography>
            </>
          )}
        </Grid>
      </Grid>
    </WeatherCardContainer>
  );
};

export default WeatherCard;
