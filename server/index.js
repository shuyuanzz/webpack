if (typeof window === 'undefined') {
    global.window = {};
}
const express = require('express');
const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '../dist/search.html'), "utf-8")
const {
    renderToString
} = require('react-dom/server');
const SSR = require('../dist/search-server');
let data = require('./data.json')
const server = (port) => {
    const app = new express();
    app.use(express.static('dist'));
    app.get('/search', (req, res) => {
        const html = renderMarkup(renderToString(SSR));
        res.status(200).send(html)
    })
    app.listen(port, () => {
        console.log(`server is running at port ${port}`);
    })
}
const renderMarkup = (str) => {
    data = JSON.stringify(data)
    return template.replace('<!--HTML_PLACEHOLDER-->',str).replace('<!-- HTML_SCRIPT -->',`<script type="text/javascript">window._data_=${data}</script>`)
}
server(process.env.PORT || 3000);