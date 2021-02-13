const timeCapsule = require('./timeCapsule');
const webScraper = require('./webScraper')

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send(`<h1>Current working routes:</h1>`);
        res.end();
    })
    // Routes
    timeCapsule(app);
    webScraper(app);
}

module.exports = appRouter;