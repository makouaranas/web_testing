export interface User {
  id: string;
  email: string;
  name: string;
  preferredLanguage: Language;
  preferredCurrency: Currency;
}

export type Language = 'en' | 'fr' | 'ar' | 'it' | 'de';

export type Currency = 'MAD' | 'USD' | 'AED' | 'EUR' | 'CHF' | 'GBP' | 'SAR';

export interface WeatherData {
  windSpeed: number;
  windDirection: string;
  temperature: number;
  precipitation: number;
  waveHeight: number;
  wavePeriod: number;
  tideLevel: number;
  pressure: number;
  humidity: number;
  fishingConditions: FishingConditions;
}

export interface FishingConditions {
  rating: number;
  description: string;
  bestTimeStart: string;
  bestTimeEnd: string;
  recommendedSpecies: string[];
}

export interface ServiceBooking {
  id: string;
  serviceType: 'fishing' | 'leisure' | 'excursion' | 'diving';
  date: string;
  participants: number;
  addons: BookingAddon[];
  totalPrice: number;
  currency: Currency;
  status: BookingStatus;
  paymentMethod: PaymentMethod;
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export type PaymentMethod = 
  | 'card' 
  | 'paypal' 
  | 'bank_transfer' 
  | 'wafa_cash' 
  | 'cash_plus' 
  | 'on_site';

export interface BookingAddon {
  id: string;
  name: string;
  price: number;
  quantity: number;
}