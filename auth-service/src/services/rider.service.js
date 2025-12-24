const Rider = require("../models/rider.model");

class RiderService {
  static async createRider(data) {
    const exists = await Rider.findOne({ mobileNo: data.mobileNo });
    if (exists) throw new Error("Rider already exists");

    return await Rider.create(data);
  }

  static async getByMobile(mobileNo) {
    return await Rider.findOne({ mobileNo });
  }
}

module.exports = RiderService;
