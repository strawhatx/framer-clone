import { Router } from "express";
import { authenticate } from "../middleware/authenicate";
import { AccountController } from "../controllers/account-controller";

const router = Router();
const routes = new AccountController();

router.get("/", authenticate, routes.getUserAccounts);
router.get("/:id", authenticate, routes.getUserAccountById);
router.put("/", authenticate, routes.updateAccount);
router.post("/", routes.createAccount);
router.delete("/:id", authenticate, routes.deleteAccount);

export const AccountRoutes = router;

