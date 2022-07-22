import { type } from "os";

interface ITrip {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: number;
  price: number;
  image: string;
  createdAt: string;
}

type FilteredTrips = null | ITrip[]

type TripProps = {
  trips: ITrip[]
}

type TripCardProps = {
  tripInfo: ITrip
}



export type { ITrip, TripProps, TripCardProps, FilteredTrips }