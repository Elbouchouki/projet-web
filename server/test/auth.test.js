const { expect } = require("chai");

const testAuth = (server, auth) => {
  describe("Authentication System Unit Tests", function () {
    it("should successfully authenticate user", async function () {
      const authInfo = {
        email: "ahmed@mail.com",
        password: "ahmedpass",
      };

      const response = await server
        .post("/auth/login/")
        .send(authInfo)
        .set("Accept", "application/json")
        .expect(200);

      const authResponse = JSON.parse(response.text);
      expect(authResponse.user.id).equal("1");
      expect(authResponse.user.email).equal("ahmed@mail.com");
      expect(authResponse.user.role).equal("AUTHOR");
      auth.token = authResponse.token;
      auth.refreshToken = authResponse.refreshToken;
    });
    it("should rise error user not found", async function () {
      const authInfo = {
        email: "notfound@mail.com",
        password: "notfound",
      };

      const response = await server
        .post("/auth/login/")
        .send(authInfo)
        .set("Accept", "application/json")
        .expect(404);

      const authResponse = JSON.parse(response.text);
      expect(authResponse.status).equal("Not Found");
    });
    // it("should rise a conflict error because of adding a Duplicate User", async function () {
    //   const user = {
    //     nom: "elbouchouki",
    //     email: "elbouchouki@gmail.com",
    //     password: "elbouchouki",
    //     role: "ADMIN",
    //   };
    //   await server
    //     .post("/users")
    //     .send(user)
    //     .set("Authorization", "bearer " + token)
    //     .set("Accept", "application/json")
    //     .expect(409);
    // });
    // it("should successfully get the recently added user", async function () {
    //   const response = await server
    //     .get("/users/" + id)
    //     .set("Authorization", "bearer " + token)
    //     .set("Accept", "application/json")
    //     .expect(200);
    //   const user = await JSON.parse(response.text);
    //   expect(user.user.nom).equal("elbouchouki");
    //   expect(user.user.email).equal("elbouchouki@gmail.com");
    //   expect(user.user.role).equal("ADMIN");
    // });
    // it("should successfully delete the recently added user", async function () {
    //   const response = await server
    //     .delete("/users/" + id)
    //     .set("Authorization", "bearer " + token)
    //     .set("Accept", "application/json")
    //     .expect(200);
    //   const responseParsed = JSON.parse(response.text);
    //   expect(responseParsed.status).equal("Deleted");
    //   expect(responseParsed.message).equal("User: " + id);
    // });
  });
};

module.exports = { testAuth };
