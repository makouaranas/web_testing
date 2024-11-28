import React from 'react';
import { useTranslation } from 'react-i18next';

export function ContactOptions() {
  const { t } = useTranslation();

  const contactOptions = [
    {
      type: 'whatsapp',
      label: 'WhatsApp',
      value: '+212XXXXXXXXX',
      groupLink: '#'
    },
    {
      type: 'telegram',
      label: 'Telegram',
      value: '@username',
      groupLink: '#'
    },
    {
      type: 'phone',
      label: t('contact.phone'),
      value: '+212XXXXXXXXX'
    },
    {
      type: 'email',
      label: t('contact.email'),
      value: 'contact@example.com'
    }
  ];

  return (
    <div className="space-y-4">
      {contactOptions.map((option) => (
        <div key={option.type} className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            {/* Icon component will be added here */}
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">{option.label}</h3>
            <p className="text-sm text-gray-500">{option.value}</p>
            {option.groupLink && (
              <a
                href={option.groupLink}
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                {t('contact.joinGroup')}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}