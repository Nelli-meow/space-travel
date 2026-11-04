import type { IReservation, Reservation } from '../types/reservation.ts';
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

export const getReservations = async (

): Promise<Reservation[]> => {
  const response = await apiClient.get<Reservation[]>('/reservations');
  return response.data;
}