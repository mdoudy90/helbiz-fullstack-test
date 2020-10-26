module.exports = {
  Query: {
    vehicles: async (_, {bike_id}, { dataSources}) => {
      return !!bike_id
        ? dataSources.helbizAPI.getAllVehicleStatusById(bike_id)
        : dataSources.helbizAPI.getAllVehicleStatuses();
    }
  }
};
