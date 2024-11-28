import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { LayoutProps } from './types';

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}