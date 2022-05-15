var supertest = require("supertest");
var should = require("should");
const { expect } = require("chai");

var server = supertest.agent("http://localhost:4000");

const test = () => {
  var id = "";
  describe("User UseCase Unit Tests", function () {
    it("should successfully add a User", async function () {
      const user = {
        nom: "elbouchouki",
        email: "elbouchouki@gmail.com",
        password: "elbouchouki",
        role: "ADMIN",
      };

      const response = await server
        .post("/users")
        .send(user)
        .set("Accept", "application/json")
        .expect(200);
      const CreatedUser = JSON.parse(response.text);
      expect(CreatedUser.nom).equal("elbouchouki");
      expect(CreatedUser.email).equal("elbouchouki@gmail.com");
      expect(CreatedUser.role).equal("ADMIN");
      id = CreatedUser.id;
    });
    it("should rise a conflict error because of adding a Duplicate User", async function () {
      const user = {
        nom: "elbouchouki",
        email: "elbouchouki@gmail.com",
        password: "elbouchouki",
        role: "ADMIN",
      };
      await server
        .post("/users")
        .send(user)
        .set("Accept", "application/json")
        .expect(409);
    });
    it("should successfully get the recently added user", async function () {
      const response = await server
        .get("/users/" + id)
        .set("Accept", "application/json")
        .expect(200);
      const user = await JSON.parse(response.text);
      expect(user.user.nom).equal("elbouchouki");
      expect(user.user.email).equal("elbouchouki@gmail.com");
      expect(user.user.role).equal("ADMIN");
    });
    it("should successfully delete the recently added user", async function () {
      const response = await server
        .delete("/users/" + id)
        .set("Accept", "application/json")
        .expect(200);
      const responseParsed = JSON.parse(response.text);

      expect(responseParsed.status).equal("Deleted");
      expect(responseParsed.message).equal("User: " + id);
    });
  });
};

test();
