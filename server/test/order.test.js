const expect = require("chai").expect;
const request = require("supertest");
const { Pet } = require("../models/pet.model");
const { Keeper } = require("../models/keeper.model");
const app = require("../app");
const User = require("../models/UserModel");
const env = process.env.NODE_ENV || 'development';
const jwt = require('jsonwebtoken');
const Order = require('../models/OrderModel');

let token = null;
let user_id = null;
let user_id2 = null;
let kid = null;
let pid = null;
let kName = null;
let kPrice = null;

describe("beginning before all",() => {
  before(async () => {
    await Keeper.deleteMany({});
    await User.deleteMany({});
    await Pet.deleteMany({});
    await Order.deleteMany({});
    let user = new User({
      name:'abc',
      email:'abc@mail.com',
      password:'abcde',
      address:'gading'
    });
    await user.save();
    user_id = user._id;

    let user2 = new User({
      name:'abcd',
      email:'abcd@mail.com',
      password:'abcdef',
      address:'gading'
    });
    await user2.save();
    user_id2 = user2._id;

    let pet = new Pet({
      name : "Test6",
      image : "Test6",
      gender : "Test6",
      age : 6,
      type : "Test6",
      user_id
    })
    await pet.save();
    pid = pet._id;

    let keeper = new Keeper({ name: "george", email: "geo@abc.com", image: "https://images-na.ssl-images-amazon.com/images/I/41dJs71v-aL._AC_.jpg", rating: 5.0, skills: ["Dog"], status: true, address: "Kebon Jeruk, Jakarta barat",price:{hourly:25000,daily:150000,weekly:1000000} })
    await keeper.save();
    kid = keeper._id;
    kName = keeper.name;
    kPrice = keeper.price.hourly
    token = await jwt.sign({ user_id,email:user.email },process.env.SECRET);
  })
  

  describe("create new order", () => {
    before(async () => {
        await Order.deleteMany({});
    });
    it("should return pet when the all request body is valid",  async() => {
      const res = await  request(app)
          .post(`/orders/${kid}`)
          .set('access_token',token)
          .send({
            quantity:1,
            price: kPrice,
            pet_id:pid
            })
      expect(res.status).to.equal(201);
    });
  });
  
  describe("get all orders", () => {
    before(async () => {
      await Order.deleteMany({});
    });
    
    describe("GET /", () => {
      it("should return all pets", async () => {
        const orders = [
          { _id:'5faf9abc8d1d8c08cc790f6e',user_id , quantity:1 , price : 25000 , keeperName : 'tama' , petName : 'abc',status:true},
          { _id:'5faf9abc8d1d8c08cc790f6f',user_id , quantity:1 , price : 25000 , keeperName : 'tama' , petName : 'abc',status:false}
        ]
        await Order.insertMany(orders)
        const res = await request(app).get("/orders").set('access_token',token)
        expect(res.status).to.equal(200);
        await Order.deleteMany({});
      })
    })
  })
    
    describe("Create Order / Error Case", () => {
      before(async () => {
          await Order.deleteMany({});
      });
      it("should be failed because params is not provided", async () => {
        const res = await  request(app)
            .post(`/orders/`)
            .set('access_token',token)
            .send({ quantity:1 , price : 25000 , keeperName : 'tama' ,pet_id:pid,status:true,user_id})
        expect(res.status).to.equal(404);
      });
    });
      
  
  describe("edit status order", () => {
      before(async () => {
        await Order.deleteMany({});
      });
      describe("PUT /orders/:id", () => {
        it("should return update", async () => {
          const order = new Order({
              user_id,
              quantity:1,
              price: kPrice,
              pet_id:pid,
              status:true
            })
            let idOrder = order._id
          await order.save()
          const res = await request(app)
              .put('/orders/' + idOrder)
              .set('access_token',token)
              .send()
          expect(res.status).to.equal(200);
          await Order.deleteMany({});
        });
      });
    })
  })
  
  describe("Update / Error Case", () => {
      describe("should be failed because idorder is not valid ", () => {
        it("should return update", async () => {
          const order = new Order({
            user_id,
            quantity:1,
            price: kPrice,
            pet_id:pid,
            status:true
          })
          const res = await request(app)
              .put('/orders/' + '5fafa713f4510138302c5253')
              .set('access_token',token)
              .send()
          expect(res.statusCode).to.equal(500);
        });
      });
    })
      