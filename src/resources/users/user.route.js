import { Router } from "express";
import controller from "./user.controller.js";
import { verifyPaystack } from "../../utils/paystack.js";

const router = Router();

router
  .route("/")
  // .get(controller.getMany)
  .post(verifyPaystack, controller.createOne);

router.route("count")
  .get(controller.getCount);
