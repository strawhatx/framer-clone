import { Router } from "express";
//import { CheckAuth } from "../middleware/checkAuth";
import { SpaceController } from "../controllers/space-controller";

const router = Router();
const routes = new SpaceController();

//router.get("/", CheckAuth, routes.getUsers);
router.get("/", routes.getSpaces);
router.get("/:id", routes.getSpaceById);
router.post("/user/:id", routes.getSpacesByUserId);
router.put("/", routes.updateSpace);
router.post("/", routes.createSpace);
router.delete("/:id", routes.deleteSpace);

export const SpaceRoutes = router;

