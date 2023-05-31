import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import WeatherCard from '../components/weatherCard';
import {
  getStoredOptions,
  getStoredCities,
  LocalStorageOptions,
} from '../utils/storage';
import { Messages } from '../utils/messages';
import { Card } from '@material-ui/core';
import './contentScript.css';

const App = () => {
  const [options, setOptions] = useState<LocalStorageOptions | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    getStoredOptions().then((options) => {
      setOptions(options);
      setIsActive(options.hasAutoOverlay);
    });
  }, []);

  useEffect(() => {
    chrome.runtime.onMessage.addListener((msg) => {
      if (msg === Messages.TOGGLE_OVERLAY) {
        setIsActive(!isActive);
      }
    });
  }, [isActive]);

  if (!options) {
    return null;
  }

  return (
    <>
      {isActive && (
        <Card className="overlayCard">
          <WeatherCard
            city={options.homeCity}
            tempScale={options.tempScale}
            onDelete={() => setIsActive(false)}
          />
        </Card>
      )}
    </>
  );
};

const root = document.createElement('div');
document.body.append(root);
ReactDOM.render(<App />, root);
