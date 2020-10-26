const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type VehicleStatus {
    bike_id: ID!
    lat: Float
    lon: Float
    is_reserved: Boolean
    is_disabled: Boolean
    vehicle_type: String
  }

  type Query {
    vehicles(bike_id: ID): [VehicleStatus]!
  }
`;

module.exports = typeDefs;
