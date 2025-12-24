const axios = require("axios");

const WALLET_BASE_URL = "http://localhost:3002";

class WalletClient {
  static async debit({ riderId, amount, type, rentalId }) {
    const response = await axios.post(`${WALLET_BASE_URL}/wallet/debit`, {
      riderId,
      amount,
      type,
      rentalId,
    });

    return response.data;
  }

  static async credit({ riderId, amount, type }) {
    const response = await axios.post(`${WALLET_BASE_URL}/wallet/credit`, {
      riderId,
      amount,
      type,
    });

    return response.data;
  }

  static async getBalance(riderId) {
    const response = await axios.get(
      `${WALLET_BASE_URL}/wallet/balance/${riderId}`
    );

    return response.data;
  }
}

module.exports = WalletClient;
