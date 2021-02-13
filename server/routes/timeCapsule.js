const TimeCapsule = require('../models/TimeCapsule')

const timeCapsule = (app) => {
    // Get Notes
    app.get('/notes', async (req, res) => {
        try {
            const notes = await TimeCapsule.find();
            res.json(notes)
        } catch (err) {
            res.send(`Error ${err}`)
        }
    });
    // Submits a note - Needs to be req.json to submit
    app.post('/notes', async (req, res) => {
        const note = new TimeCapsule({
            from: req.body.from,
            note: req.body.note,
        });
        try {
            await note.save();
            const notes = await TimeCapsule.find();
            res.json(notes)
        } catch (err) {
            res.send(`Error ${err}`)
        }
    });
};

module.exports = timeCapsule;