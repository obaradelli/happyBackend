import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import OrphanagesController from "./controllers/OrphanagesController";
import passwordRouter from "./users/routes/password.routes";
import profileRouter from "./users/routes/profile.routes";
import sessionsRouter from "./users/routes/sessions.routes";
import usersRouter from "./users/routes/users.routes";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", upload.array("images"), OrphanagesController.create);
routes.delete("/orphanages/delete/:id", OrphanagesController.delete);

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/password", passwordRouter);
routes.use("/profile", profileRouter);

export default routes;
