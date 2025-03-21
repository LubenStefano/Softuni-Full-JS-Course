import { Router } from "express";
import { getErrorMessage } from "../utils/errorUtils.js";
import techService from "../services/techService.js";

const techRouter = Router();

techRouter.get('/', async(req, res) => {
    const tech = await techService.getAllTech();
    res.render('tech', {
        title: 'Tech Page',
        tech,
    });
});

techRouter.get('/create', (req, res) => {
    if(!req.user){
        return res.redirect("/");
    }
    res.render('tech/create', {
        title: 'Create Tech Page',
    });
});
techRouter.post('/create', async(req, res) => {
    if(!req.user){
        return res.redirect("/");
    }
    try {
        const data = {...req.body, owner: req.user._id};
        await techService.createTech(data);
        res.redirect('/tech');
    } catch (err) {
        const error = getErrorMessage(err);

        res.render('tech/create', {
            title: 'Create Tech Page',
            error,
            tech: req.body,
        });
    }
});
techRouter.get('/:techId/details', async(req, res) => {
    const tech = await techService.getTechById(req.params.techId);
    const isOwner = await techService.isOwner(req.params.techId, req.user?._id);
    const isPreferred = await techService.isPreferred(req.params.techId, req.user?._id);
    res.render('tech/details', {
        title: 'Tech Details Page',
        tech,
        isOwner,
        isPreferred,
    });
});
techRouter.get('/:techId/prefer', async(req, res) => {
    if(!req.user){
        return res.redirect(`/tech/${req.params.techId}/details`);
    }
    const isOwner = await techService.isOwner(req.params.techId, req.user._id);
    const isPreferred = await techService.isPreferred(req.params.techId, req.user._id);
    
    if(isOwner || isPreferred){
        return res.redirect(`/tech/${req.params.techId}/details`);
    }
    await techService.prefer(req.params.techId, req.user._id);
    res.redirect(`/tech/${req.params.techId}/details`);
});
techRouter.get('/:techId/edit', async(req, res) => {
    const isOwner = await techService.isOwner(req.params.techId, req.user._id);
    if(!req.user || !isOwner){
        return res.redirect(`/tech/${req.params.techId}/details`);
    }
    const tech = await techService.getTechById(req.params.techId);
    res.render('tech/edit', {
        title: 'Edit Tech Page',
        tech,
    });
});
techRouter.post('/:techId/edit', async(req, res) => {
    const isOwner = await techService.isOwner(req.params.techId, req.user._id);
    if(!req.user || !isOwner){
        return res.redirect(`/tech/${req.params.techId}/details`);
    }
    try {
        await techService.edit(req.params.techId, req.body);
        res.redirect(`/tech/${req.params.techId}/details`);
    } catch (err) {
        const error = getErrorMessage(err);
        res.render('tech/edit', {
            title: 'Edit Tech Page',
            error,
            tech: req.body,
        });
    }
});
techRouter.get('/:techId/delete', async(req, res) => {
    const isOwner = await techService.isOwner(req.params.techId, req.user._id);
    if(!req.user || !isOwner){
        return res.redirect(`/tech/${req.params.techId}/details`);
    }
    await techService.delete(req.params.techId);
    res.redirect('/tech');
});

export default techRouter;