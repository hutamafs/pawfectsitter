const expect = require("chai").expect;
const request = require("supertest");
const { Keeper } = require("../models/keeper.model");
const app = require("../app");
const mongoose = require('mongoose');
const config = require('../config');
const env = process.env.NODE_ENV || 'development';

let keeperId = '';

describe("/keepers", () => {
  before(async () => {
    // before each test delete all users table data
    await Keeper.deleteMany({});
  });

//   after(async () => {
//     mongoose.disconnect();
//   })

  describe("GET /", () => {
    it("should return all keepers", async () => {
      const keepers = [
        { name: "george", email: "geo@gmail.com", image: "https://images-na.ssl-images-amazon.com/images/I/41dJs71v-aL._AC_.jpg", rating: 5.0, skills: ["Dog"], status: true, address: "Kebon Jeruk, Jakarta barat" },
        { name: "maria", email: "maria@gmail.com", image: "https://images-na.ssl-images-amazon.com/images/I/41dJs71v-aL._AC_.jpg", rating: 0.0, skills: ["Dog"], status: true, address: "Kemang, Jakarta selatan"  }
      ];
      await Keeper.insertMany(keepers);
    //   console.log(keepers);
      const res = await request(app).get("/keepers");
      expect(res.status).to.equal(200);
      expect(res.body.length).to.equal(2);
    });
  });
})