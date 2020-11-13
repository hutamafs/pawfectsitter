const expect = require('chai').expect;
const request = require('supertest');
const {User} = require('../models/UserModel');
const app = require('../app');
const mongoose = require('mongoose');
const config = require('../config');
const env = process.env.NODE_ENV || 'development';

let userId = '';

describe("api/users", () => {
    before(async () => {
      // before each test delete all users table data
      await User.deleteMany({});
    });
  
    after(async () => {
      mongoose.disconnect();
    });
  
    it("should connect and disconnect to mongodb", async () => {
        // console.log(mongoose.connection.states);
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
  });