const BEARER_TOKEN = process.env.BEARER_TOKEN || '';

module.exports = {
  Query: {
    vehicles: async (_, {bike_id}, { dataSources, bearerToken }) => {
      if (bearerToken !== BEARER_TOKEN) throw Error('invalid bearer token');
      return !!bike_id
        ? dataSources.helbizAPI.getAllVehicleStatusById(bike_id)
        : dataSources.helbizAPI.getAllVehicleStatuses();
    }
  }
};