const { RESTDataSource } = require('apollo-datasource-rest');

class HelbizAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.helbiz.com/admin/reporting/arlington/gbfs/';
  }

  async getAllVehicleStatuses() {
    const response = await this.get('free_bike_status.json');
    return !!response && !!response.data && Array.isArray(response.data.bikes)
      ? response.data.bikes.map((vehicle) => this.vehicleStatusReducer(vehicle))
      : [];
  }

  vehicleStatusReducer(vehicle) {
    return {
      id: vehicle.bike_id || '0000',
      lat: vehicle.lat,
      lon: vehicle.lon,
      is_reserved: vehicle.is_reserved || false,
      is_disabled: vehicle.is_disabled || false,
      vehicle_type: vehicle.vehicle_type,
    };
  }
}

module.exports = HelbizAPI;
