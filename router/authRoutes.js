import { Router } from "express";
import { loginWithPassword, getProfile } from "../controllers/authController.js";
import { verifyJWT } from "../middlewares/authTypeMiddleware.js";
import { authLimiter } from "../middlewares/rateLimiter.js";

const routes = Router();

routes.route("/loginWithPassword").post(authLimiter, loginWithPassword);
routes.route("/profile").get(verifyJWT, getProfile);

export default routes;
