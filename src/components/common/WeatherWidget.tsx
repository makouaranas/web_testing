import React from 'react';
import { useQuery } from 'react-query';
import { weatherApi } from '../../services/api';
import { WeatherData } from '../../types';

interface WeatherWidgetProps {
  latitude: number;
  longitude: number;
}

export function WeatherWidget({ latitude, longitude }: WeatherWidgetProps) {
  const { data, isLoading, error } = useQuery<WeatherData, Error>(
    ['weather', latitude, longitude],
    () => weatherApi.getCurrentConditions(latitude, longitude),
    {
      refetchInterval: 1800000, // 30 minutes
      retry: 3,
      onError: (error) => {
        console.error('Weather data fetch error:', error.message);
      }
    }
  );

  if (isLoading) {
    return (
      <div className="animate-pulse bg-gray-100 rounded-lg p-4">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg">
        Unable to load weather data. Please try again later.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <WeatherMetric
          label="Temperature"
          value={`${data.temperature}°C`}
          icon="temperature"
        />
        <WeatherMetric
          label="Wind"
          value={`${data.windSpeed} km/h ${data.windDirection}`}
          icon="wind"
        />
        <WeatherMetric
          label="Waves"
          value={`${data.waveHeight}m / ${data.wavePeriod}s`}
          icon="waves"
        />
        <WeatherMetric
          label="Fishing Conditions"
          value={`${data.fishingConditions.rating}/10`}
          icon="fish"
        />
      </div>
    </div>
  );
}

interface WeatherMetricProps {
  label: string;
  value: string;
  icon: string;
}

function WeatherMetric({ label, value, icon }: WeatherMetricProps) {
  return (
    <div className="text-center">
      <div className="text-gray-600 text-sm">{label}</div>
      <div className="font-semibold text-lg">{value}</div>
    </div>
  );
}