import request from "supertest";
import express from "express";
import userRoutes from "../routes/userRoutes";
import { connectTestDB, disconnectTestDB } from "./setup";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

beforeAll(connectTestDB);

afterAll(disconnectTestDB);

describe("User Routes", () => {

  it("should create user", async () => {

    const res = await request(app)
      .post("/api/users")
      .send({
        name: "Jane",
        email: "jane@test.com"
      });

    expect(res.status).toBe(201);

    expect(res.body.name).toBe("Jane");

  });

  it("should get users", async () => {

    const res = await request(app)
      .get("/api/users");

    expect(res.status).toBe(200);

  });

});