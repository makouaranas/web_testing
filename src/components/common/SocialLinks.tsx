import React from 'react';
import { useTranslation } from 'react-i18next';

export function SocialLinks() {
  const { t } = useTranslation();

  const socialLinks = [
    { name: 'Facebook', url: '#', icon: 'facebook' },
    { name: 'Instagram', url: '#', icon: 'instagram' },
    { name: 'YouTube', url: '#', icon: 'youtube' },
    { name: 'TikTok', url: '#', icon: 'tiktok' },
    { name: 'X', url: '#', icon: 'twitter' },
    { name: 'Snapchat', url: '#', icon: 'snapchat' }
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500"
          aria-label={social.name}
        >
          <span className="sr-only">{social.name}</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            {/* Icon paths will be added here */}
          </svg>
        </a>
      ))}
    </div>
  );
}