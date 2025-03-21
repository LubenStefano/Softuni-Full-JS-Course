import { Router } from "express";
import volcanoesService from "../services/volcanoesService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const volcanoesController = Router();

volcanoesController.get("/", async (req, res) => {
  const volcanoes = await volcanoesService.getAll();
  res.render("volcanoes", {
    title: "Catalog Page",
    volcanoes,
  });
});

volcanoesController.get("/create", (req, res) => {
  if(!req.user) {
    return res.redirect('/auth/login');
  }

  const types = getVolcanoType();
  res.render("volcanoes/create", {
    title: "Create Page",
    types
  });
});

volcanoesController.post("/create", async (req, res) => {
  if(!req.user) {
    return res.redirect('/auth/login');
  }
  try {
    await volcanoesService.create({ ...req.body, owner: req.user._id });
    res.redirect("/volcanoes");
  } catch (err) {
    const error = getErrorMessage(err);
    const types = getVolcanoType(req.body.type); // Pass the selected type

    res.render("volcanoes/create", {
      title: "Create Page",
      error,
      volcano: req.body,
      types
    });
  }
});
volcanoesController.get("/:id/details", async (req, res) => {
  if(!req.user) {
    return res.redirect('/auth/login');
  }
  const id = req.params.id;
  const volcano = await volcanoesService.getOne(id);
  const isUser = req.user ? true : false;
  const isOwner = await volcanoesService.isOwner(id, req.user?._id);

  const userVoted = volcano.votes.some(v => v.equals(req.user?._id));
  
  
  res.render("volcanoes/details", {
    title: "Details Page",
    volcano,
    isOwner,
    isUser,
    userVoted
  });
});

volcanoesController.get("/:id/edit", async (req, res) => {
  const isOwner = await volcanoesService.isOwner(req.params.id, req.user._id);
  if(!isOwner) {
    return res.redirect('/volcanoes');
  }
  try {
    const id = req.params.id;
    const volcano = await volcanoesService.getOne(id);
    const types = getVolcanoType(volcano.type);

    res.render("volcanoes/edit", {
      title: "Edit Page",
      volcano,
      types
    });
  } catch (err) {
    const error = getErrorMessage(err);
    const types = getVolcanoType(req.body.type); // Pass the selected type

    res.render("volcanoes/edit", {
      title: "Edit Page",
      error,
      volcano: req.body,
      types
    });
  }
});

volcanoesController.post("/:id/edit", async (req, res) => {
  const isOwner = await volcanoesService.isOwner(req.params.id, req.user._id);
  if(!isOwner) {
    return res.redirect('/volcanoes');
  }
  try {
    const id = req.params.id;
    await volcanoesService.update(id, req.body);
    res.redirect(`/volcanoes/${id}/details`);
  } catch (err) {
    const error = getErrorMessage(err);
    const types = getVolcanoType(req.body.type); // Pass the selected type

    res.render("volcanoes/edit", {
      title: "Edit Page",
      error,
      volcano: req.body,
      types
    });
  }
});
volcanoesController.get("/:id/delete", async (req, res) => {
  const isOwner = await volcanoesService.isOwner(req.params.id, req.user._id);
  if(!isOwner) {
    return res.redirect('/volcanoes');
  }
  const id = req.params.id;
  await volcanoesService.delete(id);
  res.redirect("/volcanoes");
});

volcanoesController.get("/:id/vote", async (req, res) => {
  const isOwner = await volcanoesService.isOwner(req.params.id, req.user._id);
  if(isOwner) {
    return res.redirect('/volcanoes');
  }
  const id = req.params.id;
  await volcanoesService.vote(id, req.user._id);
  res.redirect(`/volcanoes/${id}/details`);
});
volcanoesController.get("/search", async (req, res) => {
  const volcanoes = await volcanoesService.getAll();
  res.render("volcanoes/search", {
    title: "Search Page",
    volcanoes,
  });
});

function getVolcanoType(selectedType = '') {
  const typesSelection = [
    { value: 'Supervolcanoes', label: 'Supervolcanoes' },
    { value: 'Submarine', label: 'Submarine' },
    { value: 'Subglacial', label: 'Subglacial' },
    { value: 'Mud', label: 'Mud' },
    { value: 'Stratovolcanoes', label: 'Stratovolcanoes' },
    { value: 'Shield', label: 'Shield' }
  ];

  return typesSelection.map(type => ({
    ...type,
    selected: type.value === selectedType ? 'selected' : ''
  }));

}


export default volcanoesController;
