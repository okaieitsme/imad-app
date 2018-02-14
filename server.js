var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one': {
    title: 'Article One | Ankit Agarwal',
    heading: 'Article One',
    date: '13 Feb, 2018',
    content: `<p>
                This is the content I want to display.This is the content I want to display.This is the content I want to display.This is the content I want to display.This is the content I want to display.
            </p>
            <p>
                This is the content I want to display.This is the content I want to display.This is the content I want to display.This is the content I want to display.This is the content I want to display.
            </p>
            <p>
                This is the content I want to display.This is the content I want to display.This is the content I want to display.This is the content I want to display.
            </p>`
},
'article-two': {
    title: 'Article  Two| Ankit Agarwal',
    heading: 'Article Two',
    date: '13 Mar, 2018',
    content: `<p>
                This is the content I want to display.This is the content I want to display.This is the content I want to display.This is the content I want to display.This is the content I want to display.
            </p>
            `
},
'article-three': {
    title: 'Article  Three | Ankit Agarwal',
    heading: 'Article Three',
    date: '13 May, 2018',
    content: `<p>
                This is the content I want to display.This is the content I want to display.This is the content I want to display.This is the content I want to display.This is the content I want to display.
            </p>
            `
}
};



function createTemplate(data) {
    title = data.title;
    heading = data.heading;
    date = data.date;
    content = data.content;
    var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
       <div class="Container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
