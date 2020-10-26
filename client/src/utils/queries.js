import { gql } from '@apollo/client';

export const VEHICLE_STATUS_DATA  = gql`
  query GetVehicleStatusData($bike_id: ID!) {
    vehicles(bike_id: $bike_id) {
      bike_id
      lat
      lon
      is_reserved
      is_disabled
      vehicle_type
    }
  }
`;