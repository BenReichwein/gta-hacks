const cheerio = require('cheerio');
const got = require('got')

const webScraper = (app) => {
    // Get h1 and img tags
    app.post('/webScraper', async (req, res) => {
        got(req.body.link).then(response => {
            const $ = cheerio.load(response.body);

            let title = $('title').text();

            let images = [];
            $('img').each((i, img) => {
                images.push(img.attribs.src)
              });
            let links = [];
            $('a').each((i, link) => {
                links.push(link.attribs.href)
            });

            return res.json({
                title,
                images,
                links
            })

            }).catch(err => {
                console.log(err);
                return res.json({
                    title: 'No title',
                    images: 'No images',
                    links: 'No Links'
                })
            });
    });
};

module.exports = webScraper;