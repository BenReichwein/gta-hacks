const timeCapsule = require('./timeCapsule');

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send(`<h1>Current working routes:</h1>`);
        res.end();
    })
    // Routes
    timeCapsule(app);
}

module.exports = appRouter;