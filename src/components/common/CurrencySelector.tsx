import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from '@headlessui/react';
import { Currency } from '../../types';

const currencies: Record<Currency, string> = {
  MAD: 'Moroccan Dirham',
  USD: 'US Dollar',
  AED: 'UAE Dirham',
  EUR: 'Euro',
  CHF: 'Swiss Franc',
  GBP: 'British Pound',
  SAR: 'Saudi Riyal'
};

export function CurrencySelector() {
  const { t } = useTranslation();

  const changeCurrency = (currency: Currency) => {
    // Currency change logic will be implemented with Redux
    console.log('Currency changed to:', currency);
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-2 text-sm font-medium text-white hover:text-blue-200">
        <span>MAD</span>
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {Object.entries(currencies).map(([code, name]) => (
          <Menu.Item key={code}>
            {({ active }) => (
              <button
                onClick={() => changeCurrency(code as Currency)}
                className={`${
                  active ? 'bg-gray-100' : ''
                } block w-full px-4 py-2 text-left text-sm text-gray-700`}
              >
                {code} - {name}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}