const express=require("express");
const repoController=require("../controllers/repoController")

const repoRouter=express.Router();

repoRouter.post("/repo/create",repoController.createRepository);
repoRouter.post("/repo/all",repoController.getAllRepositories);
repoRouter.post("/repo/:id",repoController.fetchRepositoryById);
repoRouter.get("/repo/:name",repoController.fetchRepositoryByName);
repoRouter.put("/repo/:userID",repoController.fetchRepositoriesForCurrentUser);
repoRouter.put("/repo/update/:id",repoController.updateRespositoryById);
repoRouter.patch("/repo/toggle/:id",repoController.toggleVisibilityById);
repoRouter.delete("/repo/delete/:id",repoController.deleteRepositoryById);

module.exports=repoRouter;