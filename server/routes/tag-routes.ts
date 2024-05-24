import { Router } from "express";
import { authenticate } from "../middleware/authenicate";
import { TagController } from "../controllers/tag-controller";

const router = Router();
const routes = new TagController();

router.get("/", authenticate, routes.getTags);
router.get("/:id", authenticate, routes.getTagById);
router.post("/space/:id", authenticate, routes.getTagsBySpaceId);
router.put("/", authenticate, routes.updateTag);
router.post("/",authenticate, routes.createTag);
router.delete("/:id",authenticate, routes.deleteTag);

export const TagRoutes = router;

