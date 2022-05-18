var supertest = require("supertest");

const { testUser } = require("./user.test");
const { testAuth } = require("./auth.test");

var server = supertest.agent("http://localhost:4000");

var auth = {
  token: "",
  refreshToken: "",
};

testAuth(server, auth);
testUser(server, auth);
