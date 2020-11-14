const expect = require("chai").expect;
const request = require("supertest");
const { Pet } = require("../models/pet.model");
const app = require("../app");
const User = require("../models/UserModel");
const env = process.env.NODE_ENV || 'development';
const jwt = require('jsonwebtoken');

let token = null;
let user_id = null;

describe("beginning before all",() => {
  before(async () => {
    await User.deleteMany({});
    let user = new User({
      name:'abc',
      email:'abc@mail.com',
      password:'abcde',
      address:'gading'
    });
    await user.save();
    user_id = user._id;
    token = await jwt.sign({ user_id,email:user.email },process.env.SECRET);
  })
  

  describe("POST /", () => {
    before(async () => {
        await Pet.deleteMany({});
        // let user = new User({
        //   name:'abc',
        //   email:'abc@mail.com',
        //   password:'abcde',
        //   address:'gading'
        // });
        // await user.save();
        // user_id = user._id;
        // token = await jwt.sign({ user_id,email:user.email },process.env.SECRET);
    });
    it("should return pet when the all request body is valid",  async() => {
      const res = await  request(app)
          .post('/pets')
          .set('access_token',token)
          .send({
            name : "Test6",
            image : "Test6",
            gender : "Test6",
            age : 6,
            type : "Test6",
            user_id
            })
      expect(res.status).to.equal(201);
      
      const data = res.body
      expect(res.statusCode).to.equal(201);
      expect(data).to.have.property("name","Test6")
      expect(data).to.have.property("image","Test6")
      expect(data).to.have.property("gender","Test6")
      expect(data).to.have.property("age", 6)
      expect(data).to.have.property("type","Test6")
      expect(data).to.have.property("user_id",`${user_id}`)
    });
  });
  
  describe("/pets", () => {
    before(async () => {
      await Pet.deleteMany({});
    });
    
    describe("GET /", () => {
      it("should return all pets", async () => {
        const pets = [
          { name : "Test1" , image : "Test1" , gender : "Test1" , age : 1 , type : "Test1",user_id}
        ]
        await Pet.insertMany(pets)
        const res = await request(app).get("/pets").set('access_token',token)
        expect(res.status).to.equal(200)
      })
    })
  })
  
  describe("Create / Error Case", () => {
    describe("POST /", () => {
      before(async () => {
          await Pet.deleteMany({});
      });
      it("should be failed because name is empty", async () => {
        const res = await  request(app)
            .post('/pets')
            .set('access_token',token)
            .send({
              name : "",
              image : "Test6",
              gender : "Test6",
              age : 6,
              type : "Test6",
              user_id
              })
        expect(res.status).to.equal(400);
      });
    });
  
    describe("POST /", () => {
      before(async () => {
          await Pet.deleteMany({});
      });
      it("should be failed because image is empty", async () => {
        const res = await  request(app)
            .post('/pets')
            .set('access_token',token)
            .send({
              name : "Test6",
              image : "",
              gender : "Test6",
              age : 6,
              type : "Test6",
              user_id
              })
        expect(res.status).to.equal(400);
      });
    });
  
    describe("POST /", () => {
      before(async () => {
          await Pet.deleteMany({});
      });
      it("should be failed because gender is empty", async () => {
        const res = await  request(app)
            .post('/pets')
            .set('access_token',token)
            .send({
              name : "Test6",
              image : "Test6",
              gender : "",
              age : 6,
              type : "Test6",
              user_id
              })
        expect(res.status).to.equal(400);
      });
    });
    describe("POST /", () => {
      before(async () => {
          await Pet.deleteMany({});
      });
      it("should be failed because age is null", async () => {
        const res = await  request(app)
            .post('/pets')
            .set('access_token',token)
            .send({
              name : "Test6",
              image : "Test6",
              gender : "Test6",
              age : null,
              type : "Test6",
              user_id
              })
        expect(res.status).to.equal(400);
      });
    });
  
  
  describe("/pets", () => {
      before(async () => {
        await Pet.deleteMany({});
      });
      describe("PUT /:id", () => {
        it("should return update", async () => {
          const pet = new Pet({
              name : "Test",
              image : "Test",
              gender : "Test",
              age : 2,
              type : "Test",
              user_id
          })
          await pet.save()
          const res = await request(app)
              .put('/pets/' + pet._id)
              .set('access_token',token)
              .send({
                  name : "Test2",
                  image : "Test2",
                  gender : "Test2",
                  age : 21,
                  type : "Test2",
                  user_id
              })
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property("name","Test2")
        });
      });
    })
  })
  
  describe("Update / Error Case", () => {
      describe("should be failed because name is empty", () => {
        it("should return update", async () => {
          const pet = new Pet({
              name : "",
              image : "Test",
              gender : "Test",
              age : 2,
              type : "Test",
              user_id
          })
          const res = await request(app)
              .put('/pets/' + pet._id)
              .set('access_token',token)
              .send(pet)
          expect(res.statusCode).to.equal(400);
        });
      });
      describe("should be failed because image is empty", () => {
        it("should return update", async () => {
          const pet = new Pet({
              name : "Test",
              image : "",
              gender : "Test",
              age : 2,
              type : "Test",
              user_id
          })
          const res = await request(app)
              .put('/pets/' + pet._id)
              .set('access_token',token)
              .send(pet)
          expect(res.statusCode).to.equal(400);
        });
      });
      describe("should be failed because gender is empty", () => {
        it("should return update", async () => {
          const pet = new Pet({
              name : "Test",
              image : "Test",
              gender : "",
              age : 2,
              type : "Test",
              user_id
          })
          const res = await request(app)
              .put('/pets/' + pet._id)
              .set('access_token',token)
              .send(pet)
          expect(res.statusCode).to.equal(400);
        });
      });
      describe("should be failed because age is null", () => {
        it("should return update", async () => {
          const pet = new Pet({
              name : "Test",
              image : "Test",
              gender : "Test",
              age : null,
              type : "Test",
              user_id
          })
          const res = await request(app)
              .put('/pets/' + pet._id)
              .set('access_token',token)
              .send(pet)
          expect(res.statusCode).to.equal(400);
        });
      });
      describe("should be failed because age is null", () => {
        it("should return update", async () => {
          const pet = new Pet({
              name : "Test",
              image : "Test",
              gender : "Test",
              age : 2,
              type : "",
              user_id
          })
          const res = await request(app)
              .put('/pets/' + pet._id)
              .set('access_token',token)
              .send(pet)
          expect(res.statusCode).to.equal(400);
        });
      });
    })
    
  
  
  describe("DELETE /:id", () => {
        it("Should delete requested id and return response 200", async () => {
            const pet = new Pet({
              name : "Test",
              image : "Test",
              gender : "Test",
              age : 2,
              type : "Test",
              user_id
            })
            await pet.save()
            petId = pet._id
            const res = await request(app).delete('/pets/' + pet._id).set('access_token',token)
            expect(res.status).to.be.equal(200)
      })
  })

})





