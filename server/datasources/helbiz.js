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

  async getAllVehicleStatusById(bike_id) {
    const response = await this.getAllVehicleStatuses();
    return response.filter((vehicle) => vehicle.bike_id === bike_id);
  }

  vehicleStatusReducer({ bike_id, lat, lon, is_reserved, is_disabled, vehicle_type }) {
    return {
      bike_id: bike_id || '0000',
      lat,
      lon,
      is_reserved: is_reserved || false,
      is_disabled: is_disabled || false,
      vehicle_type,
    };
  }
}

module.exports = HelbizAPI;
