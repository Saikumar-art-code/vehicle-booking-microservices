const axios = require("axios");

const AUTH_BASE_URL = "http://localhost:3001";

class RiderClient {
  static async assignRental({ riderId, rentalId, plan }) {
    const response = await axios.post(`${AUTH_BASE_URL}/riders/assign-rental`, {
      riderId,
      rentalId,
      plan,
    });

    return response.data;
  }
}

module.exports = RiderClient;
