import page from '../node_modules/page/page.mjs';
import { showComment } from './views/commentView.js';
import { homeView } from './views/homeView.js';

page(updateCtx)
page("/", homeView);
page("/index.html", homeView);
page("/comment/:id", showComment);

page.start();



function updateCtx(ctx, next) {
    ctx.goTo = goTo;
    next();
}

function goTo(path) {
    page.redirect(path);
}