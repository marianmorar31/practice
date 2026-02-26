import { createUser, getUsers } from "../controllers/userController";
import User from "../models/User";

jest.mock("../models/User");

describe("User Controller", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("createUser", () => {

    it("should create user and return 201", async () => {

      const req: any = {
        body: {
          name: "John",
          email: "john@test.com"
        }
      };

      const res: any = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      const saveMock = jest.fn().mockResolvedValue(req.body);

      (User as any).mockImplementation(() => ({
        save: saveMock
      }));

      await createUser(req, res);

      expect(saveMock).toHaveBeenCalled();

      expect(res.status).toHaveBeenCalledWith(201);

      expect(res.json).toHaveBeenCalledWith(req.body);

    });

  });

  describe("getUsers", () => {

    it("should return users", async () => {

      const users = [
        { name: "John", email: "john@test.com" }
      ];

      const req: any = {};

      const res: any = {
        json: jest.fn()
      };

      (User.find as jest.Mock) = jest.fn().mockResolvedValue(users);

      await getUsers(req, res);

      expect(User.find).toHaveBeenCalled();

      expect(res.json).toHaveBeenCalledWith(users);

    });

  });

});