const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {

    // sendFIle function used to send html files
    // "__dirname" => absolute path for the current folder
    // join method concatenate the paths separate using commas
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
