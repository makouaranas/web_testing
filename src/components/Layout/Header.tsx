import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '../common/LanguageSelector';
import { CurrencySelector } from '../common/CurrencySelector';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            {t('brand.name')}
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/fishing" className="hover:text-blue-200">
              {t('nav.fishing')}
            </Link>
            <Link to="/leisure" className="hover:text-blue-200">
              {t('nav.leisure')}
            </Link>
            <Link to="/excursions" className="hover:text-blue-200">
              {t('nav.excursions')}
            </Link>
            <Link to="/diving" className="hover:text-blue-200">
              {t('nav.diving')}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <CurrencySelector />
          </div>
        </div>
      </div>
    </header>
  );
}