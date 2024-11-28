import React from 'react';
import { useTranslation } from 'react-i18next';
import { WeatherWidget } from '../components/common/WeatherWidget';
import { Layout } from '../components/Layout';

export function Home() {
  const { t } = useTranslation();
  
  // Example coordinates for Tangier, Morocco
  const latitude = 35.7595;
  const longitude = -5.8340;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            {t('home.title')}
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {t('home.subtitle')}
          </p>
        </div>

        <div className="mt-10">
          <WeatherWidget latitude={latitude} longitude={longitude} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Service Cards */}
          <ServiceCard
            title={t('services.fishing')}
            description={t('services.fishingDescription')}
            link="/fishing"
          />
          <ServiceCard
            title={t('services.leisure')}
            description={t('services.leisureDescription')}
            link="/leisure"
          />
          <ServiceCard
            title={t('services.excursion')}
            description={t('services.excursionDescription')}
            link="/excursion"
          />
        </div>
      </div>
    </Layout>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

function ServiceCard({ title, description, link }: ServiceCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-base text-gray-500">{description}</p>
        <div className="mt-4">
          <a
            href={link}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}