import { Router } from "express";
import techService from "../services/techService.js";

const homeRouter = Router();

homeRouter.get("/", async(req, res) => {
  const tech = await techService.getLastThreeTech();
  
  res.render("home", {
    title: "Home Page",
    tech,
  });
});
homeRouter.get("/about", (req, res) => {
  res.render("home/about", {
    title: "About Page",
  });
});
homeRouter.get("/profile", async(req, res) => {
  if(!req.user){
    return res.redirect("/");
}
  const myPreferred = await techService.getMyPreferred(req.user._id);
  const myTech = await techService.getMyTech(req.user._id);
  const email = req.user.email;
  const username = req.user.username;
  res.render("home/profile", {
    title: "Profile Page",
    myPreferred,
    myTech,
    email,
    username,
  });
});
export default homeRouter;
