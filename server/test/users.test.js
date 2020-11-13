const expect = require('chai').expect;
const request = require('supertest');
const User = require('../models/UserModel');
const app = require('../app');
const mongoose = require('mongoose');
const config = require('../config');
const env = process.env.NODE_ENV || 'development';

let userId = '';

let userData = {
  name:'tama',
  email:'tama@mail.com',
  password:'hutama',
  address:'kelapa gading',
};


describe("api/users", () => {
    before(async () => {
      // before each test delete all users table data
      await User.deleteMany({})
    });
  
    after(async () => {
      mongoose.disconnect();
    });
  
    it("should connect and disconnect to mongodb", async () => {
        
        mongoose.disconnect();
        mongoose.connection.on('disconnected', () => {
          expect(mongoose.connection.readyState).to.equal(0);
        });
        mongoose.connection.on('connected', () => {
          expect(mongoose.connection.readyState).to.equal(1);
        });
        mongoose.connection.on('error', () => {
          expect(mongoose.connection.readyState).to.equal(99);
        });
  
        await mongoose.connect(config.db[env], config.dbParams);
    });

    describe("successfully register new user", () => {
      it("should return user when the all request body is valid", async () => {
        const res = await request(app)
          .post("/users/register")
          .send(userData);
        const data = res.body;
        expect(res.status).to.equal(201);
        expect(data).to.have.property("_id");
        expect(data).to.have.property("name", `${userData.name}`);
        expect(data).to.have.property("email", `${userData.email}`);
        expect(data).to.have.property("address", `${userData.address}`);
        expect(data).not.to.have.property("password");
  
        const user = await User.findOne({ email: `${userData.email}` });
        expect(user.name).to.equal(`${userData.name}`);
        expect(user.email).to.equal(`${userData.email}`);
      });
    });

    describe("Register / Error Case", () => {
      it("should be failed because name is empty", async () => {
        const res = await request(app)
          .post("/users/register")
          .send({
            name:'',
            email:'tama@mail.com',
            password:userData.password,
            address:userData.address,
          });
        const data = res.body;
        //const errors = ['name is required'];
        expect(res.status).to.equal(400);
        expect(data).to.have.property("errors");
        expect(data.errors).to.be.an('array').that.includes('name is required')
      });

      it("should be failed because email is empty", async () => {
        const res = await request(app)
          .post("/users/register")
          .send({
            name:'tama',
            email:'',
            password:userData.password,
            address:userData.address,
          });
        const data = res.body;
        //const errors = ['name is required'];
        expect(res.status).to.equal(400);
        expect(data).to.have.property("errors");
        expect(data.errors).to.be.an('array').that.includes('email is required')
      });

      it("should be failed because address is empty", async () => {
        const res = await request(app)
          .post("/users/register")
          .send({
            name:'tama',
            email:'tama@mail.com',
            password:userData.password,
            address:'',
          });
        const data = res.body;
        //const errors = ['name is required'];
        expect(res.status).to.equal(400);
        expect(data).to.have.property("errors");
        expect(data.errors).to.be.an('array').that.includes('address is required')
      });
    });

    describe("successfully login user", () => {
      it("should return user when email and password are match", async () => {
        const res = await request(app)
          .post("/users/login")
          .send({
            email: userData.email,
            password: userData.password
          });
        const data = res.body;
        expect(res.status).to.equal(200);
        expect(data).to.have.property("access_token");
      });
    });

  });