import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from '@headlessui/react';
import { Language } from '../../types';

const languages: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
  ar: 'العربية',
  it: 'Italiano',
  de: 'Deutsch'
};

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-2 text-sm font-medium text-white hover:text-blue-200">
        <span>{languages[i18n.language as Language]}</span>
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {Object.entries(languages).map(([code, name]) => (
          <Menu.Item key={code}>
            {({ active }) => (
              <button
                onClick={() => changeLanguage(code as Language)}
                className={`${
                  active ? 'bg-gray-100' : ''
                } block w-full px-4 py-2 text-left text-sm text-gray-700`}
              >
                {name}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}