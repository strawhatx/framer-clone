import { Router } from "express";
//import { CheckAuth } from "../middleware/checkAuth";
import { SpaceController } from "../controllers/space-controller";
import { authenticate } from "../middleware/authenicate";

const router = Router();
const routes = new SpaceController();

//router.get("/", CheckAuth, routes.getUsers);
router.get("/", authenticate, routes.getSpaces);
router.get("/:id", authenticate, routes.getSpaceById);
router.post("/user/:id", authenticate, routes.getSpacesByUserId);
router.put("/", authenticate, routes.updateSpace);
router.post("/",authenticate, routes.createSpace);
router.delete("/:id",authenticate, routes.deleteSpace);

export const SpaceRoutes = router;

