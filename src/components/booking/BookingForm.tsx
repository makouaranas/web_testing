import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ServiceBooking } from '../../types';

interface BookingFormProps {
  onSubmit: (data: Partial<ServiceBooking>) => void;
  initialData?: Partial<ServiceBooking>;
}

export function BookingForm({ onSubmit, initialData }: BookingFormProps) {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm<Partial<ServiceBooking>>({
    defaultValues: initialData
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          {t('booking.serviceType')}
        </label>
        <select
          {...register('serviceType', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="fishing">{t('services.fishing')}</option>
          <option value="leisure">{t('services.leisure')}</option>
          <option value="excursion">{t('services.excursion')}</option>
          <option value="diving">{t('services.diving')}</option>
        </select>
        {errors.serviceType && (
          <p className="mt-1 text-sm text-red-600">
            {t('validation.required')}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          {t('booking.date')}
        </label>
        <input
          type="datetime-local"
          {...register('date', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.date && (
          <p className="mt-1 text-sm text-red-600">
            {t('validation.required')}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          {t('booking.participants')}
        </label>
        <input
          type="number"
          min="1"
          {...register('participants', { required: true, min: 1 })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.participants && (
          <p className="mt-1 text-sm text-red-600">
            {t('validation.minParticipants')}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {t('booking.submit')}
      </button>
    </form>
  );
}