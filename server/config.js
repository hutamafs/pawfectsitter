module.exports = {
    port: 3000,
    db: {
      production: "mongodb://user:pass@example.com:1234/pawfect",
      development: "mongodb://localhost/pawfect",
      test: "mongodb://localhost:27017/pawfect",
    },
    dbParams: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
};

// db.users.insert({"name" : "tama", "email" : "tama@mail.com", "password": "hutama","address":"kelapa"})