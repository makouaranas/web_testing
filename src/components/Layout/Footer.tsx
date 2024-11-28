import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SocialLinks } from '../common/SocialLinks';
import { ContactOptions } from '../common/ContactOptions';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('brand.name')}</h3>
            <SocialLinks />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li><Link to="/fishing">{t('nav.fishing')}</Link></li>
              <li><Link to="/leisure">{t('nav.leisure')}</Link></li>
              <li><Link to="/excursions">{t('nav.excursions')}</Link></li>
              <li><Link to="/diving">{t('nav.diving')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li><Link to="/about">{t('nav.about')}</Link></li>
              <li><Link to="/legal">{t('nav.legal')}</Link></li>
              <li><Link to="/safety">{t('nav.safety')}</Link></li>
              <li><Link to="/insurance">{t('nav.insurance')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ContactOptions />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {t('brand.name')}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}