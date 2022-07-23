interface IRoutePath {
  ROOT: string;
  SIGN_UP: string;
  SIGN_IN: string;
  TRIP: string;
  TRIP_ID: string;
  BOOKINGS: string;
  ANY: string;
}

const RoutePath: IRoutePath = {
  ROOT: '',
  SIGN_UP: 'sign-up',
  SIGN_IN: 'sign-in',
  TRIP: 'trip',
  TRIP_ID: ':tripId',
  BOOKINGS: 'bookings',
  ANY: '*'
}

export default RoutePath