module.exports = {
  Query: {
    vehicles: async (_, {id}, { dataSources}) => {
      return dataSources.helbizAPI.getAllVehicleStatuses();
    }
  }
};
