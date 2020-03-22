import { Router } from "express";
import regRouter from "./registration";

const apiRouter = new Router();

apiRouter.use("/user", regRouter);

export default apiRouter;