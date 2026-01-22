import { expect } from "chai";
import supertest from "supertest";
import app from "../src/app.js";

describe("tests api adoptions", () => {
  it("[GET] /api/adoptions", async () => {
    const response = await supertest(app).get("/api/adoptions");
    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal("success");
    expect(Array.isArray(response.body.payload)).to.be.true;
  });
  it("[GET] /api/adoptions/:aid", async () => {
    const response = await supertest(app).get(
      "/api/adoptions/507f1f77bcf86cd799439011",
    );
    expect(response.status).to.equal(404);
    expect(response.body.status).to.equal("error");
    expect(response.body.error).to.equal("Adoption not found");
  });
  it("[POST] User Not Found", async () => {
    const pet = {
      name: "lolo",
      specie: "dog",
      birthDate: "2015-05-15",
    };
    const newPet = await supertest(app).post("/api/pets").send(pet);
    expect(newPet.status).to.equal(200);
    expect(newPet.body.status).to.equal("success");
    const petId = newPet.body.payload._id;
    const response = await supertest(app).post(
      `/api/adoptions/507f1f77bcf86cd799439011/${petId}`,
    );
    expect(response.status).to.equal(404);
    expect(response.body.error).to.equal("user Not found");
    expect(response.body.status).to.equal("error");
  });
  it("[POST] Pet Not Found", async () => {
    const user = {
      first_name: "alberto",
      last_name: "perez",
      email: `alberto${Date.now()}@mail.com`,
      password: "1234",
    };
    const newUser = await supertest(app)
      .post("/api/sessions/register")
      .send(user);
    expect(newUser.status).to.equal(200);
    expect(newUser.body.status).to.equal("success");
    const userId = newUser.body.payload;
    const response = await supertest(app).post(
      `/api/adoptions/${userId}/507f1f77bcf86cd799439011`,
    );
    expect(response.status).to.equal(404);
    expect(response.body.error).to.equal("Pet Not found");
    expect(response.body.status).to.equal("error");
  });
  it("[POST] Pet adopted", async () => {
    const user = {
      first_name: "alberto",
      last_name: "perez",
      email: `alberto${Date.now()}@mail.com`,
      password: "1234",
    };
    const pet = {
      name: "lolo",
      specie: "dog",
      birthDate: "2015-05-15",
    };
    const newUser = await supertest(app)
      .post("/api/sessions/register")
      .send(user);
    expect(newUser.status).to.equal(200);
    expect(newUser.body.status).to.equal("success");
    const newPet = await supertest(app).post("/api/pets").send(pet);
    expect(newPet.status).to.equal(200);
    expect(newPet.body.status).to.equal("success");
    const petId = newPet.body.payload._id;
    const userId = newUser.body.payload;
    const response = await supertest(app).post(
      `/api/adoptions/${userId}/${petId}`,
    );
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal("Pet adopted");
    expect(response.body.status).to.equal("success");
  });
  it("[POST] Pet already adopted", async () => {
    const user = {
      first_name: "alberto",
      last_name: "perez",
      email: `alberto${Date.now()}@mail.com`,
      password: "1234",
    };
    const userB = {
      first_name: "jorge",
      last_name: "rodriguez",
      email: `jorge${Date.now()}@mail.com`,
      password: "1234",
    };
    const pet = {
      name: "lolo",
      specie: "dog",
      birthDate: "2015-05-15",
    };
    const newUser = await supertest(app)
      .post("/api/sessions/register")
      .send(user);
    expect(newUser.status).to.equal(200);
    expect(newUser.body.status).to.equal("success");
    const newPet = await supertest(app).post("/api/pets").send(pet);
    expect(newPet.status).to.equal(200);
    expect(newPet.body.status).to.equal("success");
    const petId = newPet.body.payload._id;
    const userId = newUser.body.payload;
    const response = await supertest(app).post(
      `/api/adoptions/${userId}/${petId}`,
    );
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal("Pet adopted");
    expect(response.body.status).to.equal("success");

    const newUserB = await supertest(app)
      .post("/api/sessions/register")
      .send(userB);
    expect(newUserB.status).to.equal(200);
    expect(newUserB.body.status).to.equal("success");
    const userIdB = newUserB.body.payload;
    const responseB = await supertest(app).post(
      `/api/adoptions/${userIdB}/${petId}`,
    );
    expect(responseB.status).to.equal(400);
    expect(responseB.body.error).to.equal("Pet is already adopted");
    expect(responseB.body.status).to.equal("error");
  });
});
