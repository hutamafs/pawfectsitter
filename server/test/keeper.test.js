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
      const res = await request(app).get("/keepers");
      expect(res.status).to.equal(200);
      expect(res.body.length).to.equal(2);
      await Keeper.deleteMany({});
    });
  });
  
  describe("Create Keeper /", () => {
    it("should return status 201", async () => {
      const res = await request(app)
        .post("/keepers")
        .send({
          name: "george", 
          email: "geo@gmail.com", 
          image: "https://images-na.ssl-images-amazon.com/images/I/41dJs71v-aL._AC_.jpg", 
          rating: 5.0, 
          skills: ["Dog"], 
          status: true, 
          address: "Kebon Jeruk, Jakarta barat"
        });
      expect(res.status).to.equal(201);
    })
  })
  
  describe("Create Keeper / Error Case", () => {
    it("should be failed because name is empty", async () => {
      const res = await request(app)
        .post("/keepers")
        .send({
          name: "", 
          email: "geo@mail.com", 
          image: "https://images-na.ssl-images-amazon.com/images/I/41dJs71v-aL._AC_.jpg", 
          rating: 5.0, 
          skills: ["Dog"], 
          status: true, 
          address: "Kebon Jeruk, Jakarta barat"
        });
      const data = res.body;
      //const errors = ['name is required'];
      expect(res.status).to.equal(400);
      expect(data).to.have.property("errors");
      expect(data.errors).to.be.an('array').that.includes('keeper name is required');
      await Keeper.deleteMany({});
    });
  });

  describe("Create Keeper / Error Case", () => {
    it("should be failed because email is empty", async () => {
      const res = await request(app)
        .post("/keepers")
        .send({
          name: "geo", 
          email: "", 
          image: "https://images-na.ssl-images-amazon.com/images/I/41dJs71v-aL._AC_.jpg", 
          rating: 5.0, 
          skills: ["Dog"], 
          status: true, 
          address: "Kebon Jeruk, Jakarta barat"
        });
      const data = res.body;
      //const errors = ['name is required'];
      expect(res.status).to.equal(400);
      expect(data).to.have.property("errors");
      expect(data.errors).to.be.an('array').that.includes('keeper email is required')
    });
  });

  describe("Create Keeper / Error Case", () => {
    it("should be failed because image is empty", async () => {
      const res = await request(app)
        .post("/keepers")
        .send({
          name: "geo", 
          email: "geo@mail.com", 
          image: "", 
          rating: 5.0, 
          skills: ["Dog"], 
          status: true, 
          address: "Kebon Jeruk, Jakarta barat"
        });
      const data = res.body;
      //const errors = ['name is required'];
      expect(res.status).to.equal(400);
      expect(data).to.have.property("errors");
      expect(data.errors).to.be.an('array').that.includes('keeper image is required')
    });
  });

  describe("Create Keeper / Error Case", () => {
    it("should be failed because status is empty", async () => {
      const res = await request(app)
        .post("/keepers")
        .send({
          name: "geo", 
          email: "geo@mail.com", 
          image: "a", 
          rating: 4, 
          skills: ["dogs"], 
          address: "Kebon Jeruk, Jakarta barat"
        });
      const data = res.body;
      //const errors = ['name is required'];
      expect(res.status).to.equal(400);
      expect(data).to.have.property("errors");
      expect(data.errors).to.be.an('array').that.includes('keeper status is required')
    });
  });

  describe("Create Keeper / Error Case", () => {
    it("should be failed because address is empty", async () => {
      const res = await request(app)
        .post("/keepers")
        .send({
          name: "geo", 
          email: "geo@mail.com", 
          image: "a", 
          rating: 4,
          status:true,
          skills: ["dogs"], 
          address: ""
        });
      const data = res.body;
      //const errors = ['name is required'];
      expect(res.status).to.equal(400);
      expect(data).to.have.property("errors");
      expect(data.errors).to.be.an('array').that.includes('keeper address is required')
    });
  });
})