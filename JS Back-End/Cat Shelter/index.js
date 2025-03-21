const http = require('http');

const homeTemplate = require('./views/index.html.js');
const styleTemplate = require('./static/style.css.js');
const addCatTemplate = require('./views/addCat.html.js')
const addCatBreed = require('./views/addCatBreedTemplate.html.js')
const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    
    const cats = [
        {
            id: 1,
            name: 'Tommy',
            imageUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg',
            breed: 'Bombay Cat',
            description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.',
        },
        {
            id: 2,
            name: 'Navcho',
            imageUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg',
            breed: 'Persian Cat',
            description: 'Nebuchadnezzar II',
        },
        {
            id: 3,
            name: 'Sisa',
            imageUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg',
            breed: 'Bombay Cat',
            description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.',
        },
    ];
    if(req.url === '/'){
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        
        res.write(homeTemplate(cats));
        res.end();
    }else if(req.url === '/style.css'){
        res.writeHead(200, {
            'content-type': 'text/css'
        });
        
        res.write(styleTemplate);
        res.end();
    }else if(req.url === "/cats/add-breed"){
        res.writeHead(200, {
            "content-type": "text/html"
        })

        res.write(addCatBreed)
        res.end();
    }else if(req.url === "/cats/add-cat"){
        res.writeHead(200, {
            "content-type": "text/html"
        })

        res.write(addCatTemplate)
        res.end();
    }
});

server.listen(5000);
console.log('Server is listening on port 5000...');