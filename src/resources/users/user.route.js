import { Router } from "express";
import controller from "./user.controller.js";

const router = Router();

router
  .route("users/")
  .get("/", controller.getMany)
  .get("count", controller.getCount);
