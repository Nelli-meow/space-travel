export interface Reservation {
  id: string;
  destinationSlug: string;
  hotelSlug: string;
  shipSlug: string;
  departure: string;
  guests: number;
}