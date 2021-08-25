const express = require('express');
const bodyParser = require('body-parser');
const useragent = require('express-useragent');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(useragent.express());

app.get('/', (req, res) => {
    if(useragent.isMobile) {
        res.redirect('http://mobile.loadbalance.local');
    } else {
        res.redirect('http://desktop.loadbalance.local');
    }
});

app.listen(3000, () => {
    console.log('Server running at port 3000');
})
