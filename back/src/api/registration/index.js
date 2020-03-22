import Router from "express";
import regController from "./controller";

const regRouter = new Router();

regRouter.get("/", regController.get);
regRouter.delete("/", regController.deleteById);
regRouter.post("/signUp", regController.post);
regRouter.put("/logIn", regController.logIn);
regRouter.put("/logOut", regController.logOut);

export default regRouter;