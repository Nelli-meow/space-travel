import type { IReservation } from '../types/reservation.ts';
import { apiClient } from './client.ts';

export const createReservation = async (
  reservation: IReservation,
): Promise<IReservation> => {
  const response = await apiClient.post<IReservation>(
    '/reservations',
    reservation,
  );
  return response.data;
};