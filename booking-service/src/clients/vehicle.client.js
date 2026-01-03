const axios = require("axios");

const VEHICLE_BASE_URL = "http://localhost:3004";

class VehicleClient {
  static async getById(vehicleId) {
    try {
      const response = await axios.get(
        `${VEHICLE_BASE_URL}/vehicles/${vehicleId}`
      );

      return response.data.data;
    } catch (err) {
      console.error("❌ VehicleClient.getById failed");
      console.error("URL:", `${VEHICLE_BASE_URL}/vehicles/${vehicleId}`);
      console.error("Error:", err.message);

      throw new Error("Vehicle service not reachable");
    }
  }

  static async assignBooking({ vehicleId, riderId, rentalId }) {
    try {
      const response = await axios.post(
        `${VEHICLE_BASE_URL}/vehicles/${vehicleId}/assign`,
        { riderId, rentalId }
      );

      return response.data.data;
    } catch (err) {
      console.error("❌ VehicleClient.assignBooking failed");
      throw err;
    }
  }
}

module.exports = VehicleClient;
