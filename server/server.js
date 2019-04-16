const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081
const bodyParser = require('body-parser');
const path = require('path');
const history = require('connect-history-api-fallback')
const staticFileMiddleware = express.static(path.join(__dirname, 'build'));
const sequelize = require('./db/models')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/router')(app)

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true,
}));
app.use(staticFileMiddleware);

app.listen(PORT, () => {
  console.log(`Server up on port ${PORT}!`)
});